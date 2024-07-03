import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { port, serverPort } from './constants'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  envDir: '../',
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${serverPort}`,
        changeOrigin: true,
      },
    },
    port: port,
  },
  build: {
    outDir: '../.local/vite/dist',
    assetsDir: 'assets',
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
        },
      },
    },
  },
})
