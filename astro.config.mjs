import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind(), vue()],
  // outDir: '../blalmal10a.github.io',
  build: {
    assets: 'assets'
  },

  site: 'https://blalmal10a.github.io'

});