import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from 'flowbite-react/plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,         // force port 5173
    strictPort: true    // don't auto-forward to 5174
  },
  plugins: [react(), flowbiteReact()],
})
