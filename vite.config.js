import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true,

    proxy: {
      '/api': {
        target: 'http://localhost:8788/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
