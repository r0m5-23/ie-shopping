import { defineConfig, type PluginOption } from 'vite'

export default defineConfig(({ mode }) => ({
  base: './',
  build: {
    modulePreload: false,
  }
}))