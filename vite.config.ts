import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths let the same build run at a domain root or under /portfolio/.
  base: './',
  plugins: [react(), tailwindcss()],
})
