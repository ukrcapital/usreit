import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // For GitHub Pages: base = /repo-name/ (set by deploy workflow). Local dev: ./
  base: process.env.BASE_PATH || './',
  plugins: [react()],
});
