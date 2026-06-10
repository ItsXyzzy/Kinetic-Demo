// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: true // Tells Vite to accept incoming connections from any public tunnel domain
    }
  }
});