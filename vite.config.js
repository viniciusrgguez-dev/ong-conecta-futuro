 import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        cadastro: 'cadastro.html',
        projetos: 'projetos.html',
      },
    },
  },
});