import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: '../LetsGo/wwwroot/app/', // inside the Umbraco project
    emptyOutDir: true, // needs to be explicitly set because it’s outside of ./
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'main.js')
      }
    }
  }
})