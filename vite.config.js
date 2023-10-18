import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/pages/index.html'),
        // anotherPage: resolve(__dirname, 'src/pages/anotherPlace/index.html'),
      },
    },
  },
})
