import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages: https://ukrcapital.github.io/usreit/ → base /usreit/
  base: process.env.BASE_PATH || './',
  plugins: [react()],
});
