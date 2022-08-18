import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkReadingTime } from "./remark-plugin.mjs";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // vite: { ssr: { external: ["svgo"] } },
  site: "https://fazzaamiarso.me",
  integrations: [react(), mdx({
    remarkPlugins: {
      extends: [remarkReadingTime]
    },
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypeExternalLinks, {
      rel: ["nofollow"],
      target: "_blank"
    }]]
  }), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), sitemap(), partytown()],
  markdown: {
    shikiConfig: {
      theme: "material-ocean"
    }
  }
});