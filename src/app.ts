import type {
  AcApDocManager,
  AcApOpenDatabaseOptions,
  AcApOpenViewMode,
  AcEdOpenMode
} from '@mlightcad/cad-simple-viewer'
import {
  loadCadSimpleViewer,
  preloadViewerAppModules,
  scheduleViewerPreload
} from './viewerLoader'
import { WEBWORKER_FILE_URLS } from './workerConfig'

/**
 * Toast notification severity used by {@link CadViewerApp.showMessage}.
 */
type MessageType = 'success' | 'error' | 'info'

/**
 * Upload-screen value for initial view when the user leaves the choice on **Auto**.
 */
type OpenViewModeChoice = 'auto' | AcApOpenViewMode

/**
 * Open options collected from the upload screen before a file is loaded.
 */
interface OpenOptions {
  /** Database access mode passed to {@link AcApOpenDatabaseOptions.mode}. */
  mode: AcEdOpenMode
  /** Whether MTEXT is rendered on the main thread (fixed after first {@link CadViewerApp.initialize}). */
  useMainThreadDraw: boolean
  /** Whether non-plottable layers are drawn ({@link AcApOpenDatabaseOptions.drawNoPlotLayers}). */
  drawNoPlotLayers: boolean
  /** Whether geometry is shown incrementally while the file converts. */
  progressiveRendering: boolean
  /** Circle/arc tessellation sides ({@link AcApOpenDatabaseOptions.circleSides}). */
  circleSides: number
  /** Paper-space canvas background RGB (e.g. `0xffffff` white, `0x000000` black). */
  paperSpaceBackground: number
  /**
   * When `true`, hide built-in export commands and skip HTML/SVG plugins
   * (fixed after first {@link CadViewerApp.initialize}).
   */
  disableExport: boolean
  /** How the view is framed after open; omitted when the user selects **Auto**. */
  openViewMode?: AcApOpenViewMode
}

/**
 * Options for {@link CadViewerApp}.
 */
export interface CadViewerAppOptions {
  /**
   * When `true` (default), registers lazy export plugins and the simple UI toolbar.
   * Set to `false` to run a bare `cad-simple-viewer` without any plugins.
   */
  enablePlugins?: boolean
}

/**
 * Application shell that wires the example HTML UI to `AcApDocManager`.
 *
 * Responsibilities:
 * - Keep the homepage free of a static `@mlightcad/cad-simple-viewer` import
 * - Mount {@link AcUiFileOpenPanel} on the landing screen (local / URL / new drawing)
 * - Preload viewer JS after first paint, then create the viewer on first file open
 * - Optionally register demo commands, lazy export plugins, and the simple UI plugin
 * - Handle local / URL DXF/DWG open with configurable open options
 * - Reflect document state in the DOM (upload screen vs viewer)
 *
 * The viewer package and `AcApDocManager.createInstance` are deferred until needed;
 * {@link scheduleViewerPreload} warms the module cache in the background.
 */
export class CadViewerApp {
  /**
   * Host element passed to `AcApDocManager.createInstance` as the WebGL/view canvas parent.
   * Corresponds to `#cad-container` in the page HTML.
   */
  private container: HTMLDivElement

  /**
   * Viewer pane that hosts the CAD canvas and (when enabled) simple UI plugin overlays.
   * Corresponds to `#viewerPane` in the page HTML.
   */
  private viewerPane: HTMLElement

  /**
   * Whether {@link AcApDocManager.createInstance} has completed for this page session.
   * Stays false until the user opens a file for the first time.
   */
  private isInitialized: boolean = false

  /**
   * Whether to register export + simple UI plugins after `createInstance`.
   */
  private readonly enablePlugins: boolean

  /**
   * Cached `AcApDocManager` class after the viewer module has been loaded.
   * Set during {@link CadViewerApp.initialize}.
   */
  private DocManager: typeof AcApDocManager | null = null

  /**
   * Binds DOM references from the page HTML and registers UI event listeners.
   *
   * Does not load `@mlightcad/cad-simple-viewer` or create the CAD viewer;
   * schedules a background preload and initializes on first file open /
   * new drawing.
   *
   * @param options - App options; set `enablePlugins: false` for a bare viewer
   */
  constructor(options: CadViewerAppOptions = {}) {
    this.enablePlugins = options.enablePlugins !== false

    this.container = document.getElementById('cad-container') as HTMLDivElement
    this.viewerPane = document.getElementById('viewerPane') as HTMLElement

    void this.loadFile()
    scheduleViewerPreload(this.enablePlugins)
  }

  /**
   * Reads the current upload-screen choices into an {@link OpenOptions} object.
   *
   * @returns Options applied on the next {@link CadViewerApp.loadFile} call
   */
  private readOpenOptions(): OpenOptions {
    const openViewChoice = 'saved' as OpenViewModeChoice
    const openViewMode =
      openViewChoice === 'auto' ? undefined : (openViewChoice as AcApOpenViewMode)

    return {
      mode: 0 as AcEdOpenMode,
      useMainThreadDraw: true,
      drawNoPlotLayers: false,
      progressiveRendering: false,
      circleSides: 100,
      paperSpaceBackground: 0xffffff,
      disableExport: true,
      openViewMode
    }
  }

  /**
   * Builds {@link AcApOpenDatabaseOptions} from upload-screen choices, including
   * paper-space background via `paperbkcolor`.
   */
  private buildDatabaseOpenOptions(
    openOptions: OpenOptions,
    layoutBackgroundColorFromRgb: (typeof import('@mlightcad/cad-simple-viewer'))['layoutBackgroundColorFromRgb'],
    extras: Partial<AcApOpenDatabaseOptions> = {}
  ): AcApOpenDatabaseOptions {
    return {
      mode: openOptions.mode,
      drawNoPlotLayers: openOptions.drawNoPlotLayers,
      progressiveRendering: openOptions.progressiveRendering,
      circleSides: openOptions.circleSides,
      sysVars: {
        paperbkcolor: layoutBackgroundColorFromRgb(openOptions.paperSpaceBackground)
      },
      ...(openOptions.openViewMode != null
        ? { openViewMode: openOptions.openViewMode }
        : {}),
      ...extras
    }
  }


  /**
   * Creates the singleton `AcApDocManager` and registers commands, plugins, and listeners.
   *
   * Dynamically imports `@mlightcad/cad-simple-viewer` (reusing any background preload)
   * before calling `createInstance`.
   *
   * Configuration highlights:
   * - LibreDWG DWG converter — host-registered via {@link registerLibreDwgConverter} (GPL opt-in)
   * - `webworkerFileUrls` — MTEXT + LibreDWG worker (+ wasm) copied to `dist/assets/`
   * - `checkWorkersOnInit` — probe worker URLs after registration (see {@link WEBWORKER_FILE_URLS})
   * - `baseUrl` — optional CDN root for built-in resources (demo override)
   * - `useMainThreadDraw` — MTEXT render mode; fixed for the lifetime of the page session
   * - `disableExport` — hides built-in export commands; fixed for the page session
   *
   * HTML export runtime (`viewer-runtime.iife.js`) is configured on the HTML plugin via
   * {@link registerPlugins} / `registerLazyHtmlPlugin({ viewerRuntimeUrl })` — not here.
   *
   * Before `createInstance`, {@link AcApDocManager.checkWebworkerReadiness} verifies
   * that worker scripts respond without downloading large bundles (HEAD + ranged GET fallback).
   * DXF parsing uses the built-in converter in `@mlightcad/data-model` and needs no worker file.
   *
   * Idempotent: subsequent calls are no-ops once {@link CadViewerApp.isInitialized} is true.
   *
   * @param useMainThreadDraw - When `true`, MTEXT is rendered on the main thread instead of a worker
   * @param disableExport - When `true`, hide export commands and skip HTML/SVG plugins
   * @returns `true` when the viewer is ready; `false` when worker checks or init failed
   * @remarks On failure, logs to the console and shows an error toast via {@link CadViewerApp.showMessage}.
   */
  private async initialize(
    useMainThreadDraw: boolean,
    disableExport: boolean
  ): Promise<boolean> {
    if (this.isInitialized) {
      return true
    }

    try {
      // Prefer the shared preload promise so first open awaits in-flight work
      await preloadViewerAppModules(this.enablePlugins)
      const { AcApDocManager, acedApplyUiTheme } =
        await loadCadSimpleViewer()
      this.DocManager = AcApDocManager

      acedApplyUiTheme('dark', this.viewerPane)

      AcApDocManager.createInstance({
        container: this.container,
        busyIndicatorHost: this.viewerPane,
        autoResize: true,
        baseUrl: 'https://cdn.jsdelivr.net/gh/mlightcad/cad-data@main/',
        webworkerFileUrls: WEBWORKER_FILE_URLS,
        checkWorkersOnInit: false,
        useMainThreadDraw,
        disableExport
      })

      if (this.enablePlugins) {
        // Dynamic import keeps plugin `/register` stubs out of the bare-viewer entry
        const { registerPlugins } = await import('./register')
        await registerPlugins(this.viewerPane)
      }


      this.isInitialized = true
      return true
    } catch (error) {
      console.error('Failed to initialize CAD viewer:', error)
      this.showMessage('Failed to initialize CAD viewer', 'error')
      return false
    }
  }

  /**
   * Returns the cached `AcApDocManager` class after successful initialization.
   */
  private requireDocManager(): typeof AcApDocManager {
    if (!this.DocManager) {
      throw new Error('CAD viewer is not initialized')
    }
    return this.DocManager
  }

  /**
   * Reads a local file, validates extension, and opens it in the viewer.
   *
   * Flow:
   * 1. {@link CadViewerApp.readOpenOptions} → {@link CadViewerApp.initialize}
   * 2. Reject non-`.dxf` / non-`.dwg` names with an error toast
   * 3. Hide the upload screen via `documentToBeOpened` while the viewer shows its loading indicator
   * 4. {@link CadViewerApp.readFile} → `openDocument` with upload-screen options
   * 5. On success, {@link CadViewerApp.hideUploadScreen} and a success toast; on failure, {@link CadViewerApp.showUploadScreen}
   *
   * @param file - User-selected file from {@link AcUiFileOpenPanel}
   */
  private async loadFile(): Promise<void> {
    const openOptions = this.readOpenOptions()

    if (
      !(await this.initialize(
        openOptions.useMainThreadDraw,
        openOptions.disableExport
      ))
    ) {
      return
    }

    this.clearMessages()

    try {
      const docManager = this.requireDocManager().instance
      if (!(await docManager.areWorkersReady())) {
        this.showMessage(
          'CAD worker scripts are not reachable. Check deployment of assets/*-worker.js.',
          'error'
        )
        return
      }

      const response = await fetch('./shopping_3al.dxf')

      if (!response.ok) {
        this.showMessage(
          `Não foi possível carregar o DXF (${response.status})`,
          'error'
        )
        return
      }

      const fileContent = await response.arrayBuffer()
      const { layoutBackgroundColorFromRgb } = await loadCadSimpleViewer()
      const options = this.buildDatabaseOpenOptions(
        openOptions,
        layoutBackgroundColorFromRgb,
        { minimumChunkSize: 1000 }
      )

      const success = await docManager.openDocument(
        'shopping_3al.dxf',
        fileContent,
        options
      )

      if (success) {
        this.showMessage('DXF carregado com sucesso', 'success')
      } else {
        this.showMessage('Não foi possível abrir o DXF', 'error')
      }
    } catch (error) {
      console.error('Error loading project DXF:', error)
      this.showMessage('Erro ao carregar o DXF', 'error')
    }
  }

  /**
   * Shows a short-lived centered toast at the top of the viewport.
   *
   * Replaces any existing `.popup-message` elements before creating a new one.
   * Fades out after ~1s and removes the node from the DOM.
   *
   * @param message - Text shown to the user
   * @param type - Controls background and border colors (`success`, `error`, or `info`)
   */
  private showMessage(message: string, type: MessageType = 'info'): void {
    this.clearMessages()

    const popup = document.createElement('div')
    popup.className = `popup-message ${type}`
    popup.textContent = message
    popup.style.position = 'fixed'
    popup.style.top = '2rem'
    popup.style.left = '50%'
    popup.style.transform = 'translateX(-50%)'
    popup.style.zIndex = '1000'
    popup.style.padding = '1rem 2rem'
    popup.style.borderRadius = '8px'
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
    popup.style.fontSize = '1.1rem'
    popup.style.opacity = '0.98'
    popup.style.transition = 'opacity 0.2s'
    if (type === 'error') {
      popup.style.background = '#ffe6e6'
      popup.style.color = '#dc3545'
      popup.style.border = '1px solid #ffcccc'
    } else if (type === 'success') {
      popup.style.background = '#e6ffe6'
      popup.style.color = '#28a745'
      popup.style.border = '1px solid #ccffcc'
    } else {
      popup.style.background = '#f0f0f0'
      popup.style.color = '#333'
      popup.style.border = '1px solid #ccc'
    }

    document.body.appendChild(popup)

    setTimeout(() => {
      popup.style.opacity = '0'
      setTimeout(() => {
        popup.parentNode?.removeChild(popup)
      }, 200)
    }, 1000)
  }

  /**
   * Removes all in-flight toast elements (class `popup-message`) from `document.body`.
   */
  private clearMessages(): void {
    document.querySelectorAll('.popup-message').forEach(el => el.remove())
  }
}

/**
 * Starts {@link CadViewerApp} once the DOM is ready.
 *
 * @param options - Passed to {@link CadViewerApp}
 */
export function bootCadViewerApp(options: CadViewerAppOptions = {}): void {
  const start = () => {
    new CadViewerApp(options)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
}