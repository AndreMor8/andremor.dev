import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    template: {
      compilerOptions: {
        isCustomElement(tag) {
          switch (tag) {
            case 'lite-youtube':
              return true;
            default:
              return false;
          }
        }

      }
    }
  }), purgecss()]
});