import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://digistar-demo-be.vercel.app', // The backend API
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // If the target is using HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' from the request URL before forwarding it
      },
    },
  },
});
