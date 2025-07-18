if (!global.crypto) {
  global.crypto = require('crypto');
  global.crypto.getRandomValues = (arr) => require('crypto').randomFillSync(arr);
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  
  base: '/shikra-framework/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
