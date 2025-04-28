import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";

export default defineConfig({
  site: 'https://caoduyhung.vercel.app/',
  integrations: [tailwind(), vue()],
});
