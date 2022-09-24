import { defineConfig } from 'astro/config';
import purgecss from "astro-purgecss";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss({
    /*safelist: ['lty-playbtn', 'lyt-activated', 'lyt-visually-hidden', 'iframe']*/
  }), alpinejs()]
});