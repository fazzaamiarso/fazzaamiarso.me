/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // typography: (theme) => ({
      //   invert: {
      //     css: {
      //       "--tw-prose-headings": "#fee103",
      //     },
      //   },
      // }),
      colors: {
        primary: {
          black: "#101011",
          white: "#fffffd",
          red: "#e16358",
        },
        secondary: {
          text: "#666764",
          brown: "#f9f4f0",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
