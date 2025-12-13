import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import postcssPxtorem from "postcss-pxtorem";
import emMediaQuery from "postcss-em-media-query";

export default defineConfig({
  plugins: [sveltekit(), imagetools()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer, postcssPxtorem, emMediaQuery],
    },
  },
});
