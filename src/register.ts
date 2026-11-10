import {
  acuiRegisterSimpleUiPlugin,
} from '@mlightcad/cad-simple-ui-plugin'
import { AcApDocManager } from '@mlightcad/cad-simple-viewer'

let isSimpleUiRegistered = false

/**
 * Loads the simple UI plugin with this example's default toolbar layout.
 *
 * When {@link AcApDocManager.disableExport} is true, the export toolbar item is
 * omitted via `toolbar.excludeItems`.
 *
 * @param host - Viewer pane element that hosts toolbar overlays.
 */
export const registerSimpleUi = async (host: HTMLElement): Promise<void> => {
  if (isSimpleUiRegistered) {
    return
  }

  await acuiRegisterSimpleUiPlugin(AcApDocManager.instance.pluginManager, {
    host,
    dockPanel: {
      defaultOpen: false,
      defaultSide: 'left',
      defaultHeight: 240,
      defaultWidth: 280
    },
    toolbar: {
      placement: 'right',
      // Custom list keeps the default tools, but Export HTML / PDF download
      // immediately. `items: 'default'` leaves those buttons on command-line prompts.
      items: 'default',
      collapsible: true,
    },
    // Phone layout: stretch bottom bar + labeled zoom/measure sub-toolbars
    // (same as packages/cad-simple-viewer-example).
    layouts: {
      phone: {
        toolbar: {
          placement: 'bottom',
          showLabels: true,
          size: 'stretch',
          edgeOffset: 0,
          collapsible: false,
          inCanvasParent: true,
          subToolbar: {
            showLabels: true,
            showSeparators: false,
            size: 'stretch',
            overflow: 'wrap',
            replaceOnNested: true
          }
        }
      }
    }
  })

  isSimpleUiRegistered = true
}

/**
 * Registers all plugins used by this example (export + simple UI).
 *
 * @param host - Viewer pane element passed to the simple UI plugin.
 */
export const registerPlugins = async (host: HTMLElement): Promise<void> => {
  await registerSimpleUi(host)
}
