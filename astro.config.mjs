// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 🚨 ADD THESE TWO LINES:
  site: 'https://itsxyzzy.github.io', 
  base: '/Kinetic-Demo', // Note the leading slash!

  vite: {
    server: {
      allowedHosts: true
    }
  }
});