// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hernanespinozadev.github.io',
  base: '/hotusoft',
  vite: {
    plugins: [tailwindcss()]
  }
});