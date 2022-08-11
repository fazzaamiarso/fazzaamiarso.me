import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: { ssr: { external: ["svgo"] } },
  integrations: [tailwind(), react(), image(), mdx()],
});