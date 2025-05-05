// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  env:{
    schema:{
      SCORE_API: envField.string({context:'server',access:'public'})
    }
  }
});