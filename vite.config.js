import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    VITE_BASE_URL: 'http://localhost:3000',
  },
})
