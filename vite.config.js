if (typeof globalThis.crypto === "undefined") {
  try {
    globalThis.crypto = require("crypto").webcrypto;
  } catch {
    // fallback or warning
  }
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
