vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        cadastro: resolve(__dirname, 'cadastro.html'),
      },
    },
  },
});
