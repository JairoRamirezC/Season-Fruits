import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //* Lo siguiente es para crear un proxy y que no me afecten los CORS al momento de consumir la API de fruityvice
  server: {
    proxy: {
      '/api': {
        target: 'https://www.fruityvice.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: "dist"
  }
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   }
  // }
})
