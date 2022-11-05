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
  site: "https://fazzaamiarso.me",
  integrations: [
    react(),
    mdx({
      extendPlugins: "markdown",
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypeExternalLinks,
          {
            rel: ["nofollow"],
            target: "_blank",
          },
        ],
      ],
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-ocean",
    },
  },
});