import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vite-github-deploy-project/',
  base:
    process.env.NODE_ENV === 'production'
      ? '/vite-github-deploy-project/'
      : '/',
  plugins: [react()],
});
