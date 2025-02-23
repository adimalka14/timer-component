import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyAwesomeReactTimer',
      fileName: (format) => `my-awesome-react-timer.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
    outDir: 'dist'
  }
})
