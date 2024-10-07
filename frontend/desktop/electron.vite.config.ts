import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    publicDir: resolve('src/renderer/public'),
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@app': resolve('src/renderer/src'),
        '@view': resolve('src/renderer/src/view'),
        '@desktop': resolve('src/renderer/src/view/desktop'),
        '@mobile': resolve('src/renderer/src/view/mobile'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@store': resolve('src/renderer/src/store'),
        '@components': resolve('src/renderer/src/components'),
      }
    },
    plugins: [react()]
  }
})
