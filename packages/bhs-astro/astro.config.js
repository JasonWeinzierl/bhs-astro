// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://beltonhistoricalsociety.org',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  server: {
    port: 4322,
  },
});
