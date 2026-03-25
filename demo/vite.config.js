import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@cron-es': path.resolve(__dirname, '../es'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});