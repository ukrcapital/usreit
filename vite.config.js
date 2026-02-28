import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://ukrcapital.github.io/usreit/ — base /usreit/ щоб не було білого екрану (assets завжди з правильним шляхом)
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/usreit/' : (process.env.BASE_PATH || './'),
  plugins: [react()],
}));
