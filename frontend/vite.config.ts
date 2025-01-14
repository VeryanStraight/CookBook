import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  base: '/CookBook/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      apply: 'build',
      writeBundle() {
        fs.copyFileSync('public/404.html', 'dist/404.html');
      }
    }
  ],
});
