// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  // PoC: Output completamente estático (sin adapter)
  // Genera HTML puro sin servidor
  output: 'static',

  server: {
    port: 5001,
  },

  // Para canonical URLs
  site: 'https://etfnexo.com',
});