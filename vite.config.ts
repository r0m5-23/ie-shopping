import { defineConfig, type PluginOption } from 'vite'

export default defineConfig(({ mode }) => ({
  base: '/ie-shopping/',
  build: {
    modulePreload: false,
  }
}))