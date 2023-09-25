
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  build: {
    // ...
    rollupOptions: {
      // ...
      input: 'src/main.js', // Check if the entry point is correct
    },
  },
});

