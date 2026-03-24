import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/catarina-ai/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        downloads: resolve(__dirname, 'downloads.html'),
      },
    },
    outDir: 'dist',
  },
});
