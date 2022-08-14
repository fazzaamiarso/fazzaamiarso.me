import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkReadingTime } from "./remark-plugin.mjs";

// https://astro.build/config
export default defineConfig({
  // vite: { ssr: { external: ["svgo"] } },
  integrations: [
    react(),
    mdx({
      remarkPlugins: { extends: [remarkReadingTime] },
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings]],
    }),
    tailwind(),
    image(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});