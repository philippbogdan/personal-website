import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain before deploying.
const SITE_URL = 'https://philippbogdan.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-serif',
      weights: ['200 800'],
      styles: ['normal', 'italic'],
      fallbacks: ['Iowan Old Style', 'Palatino', 'Georgia', 'serif'],
    },
  ],
});
