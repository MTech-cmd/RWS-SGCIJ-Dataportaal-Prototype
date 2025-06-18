import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  let base = './'

  if (mode === 'gh') {
    base = '/RWS-SGCIJ-Dataportaal-Prototype'
  }

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
    ],
  }
})
