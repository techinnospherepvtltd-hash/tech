import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tech/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
