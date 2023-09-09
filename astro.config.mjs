import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  image: {
    domains: ['astro.build']
  }
});