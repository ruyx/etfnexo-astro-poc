// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  // Astro v5: output: 'static' es el default y permite SSR selectivo
  // Para SSR en una página específica, usar export const prerender = false
  output: 'static',

  server: {
    port: 5001, // Diferente a Next.js (5000)
  },

  // Para canonical URLs
  site: 'https://etfnexo.com',

  adapter: node({
    mode: 'standalone'
  })
});