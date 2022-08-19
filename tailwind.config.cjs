/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          text: "rgb(var(--color-primary-text) / <alpha-value>)",
          bg: "rgb(var(--color-primary-bg) / <alpha-value>)",
          red: "rgb(var(--color-primary-red) / <alpha-value>)",
        },
        secondary: {
          text: "rgb(var(--color-secondary-text) / <alpha-value>)",
          brown: "rgb(var(--color-secondary-brown) / <alpha-value>)",
        },
      },
      typography: ({ theme }) => {
        const red = theme("colors.primary.red / 1");

        return {
          DEFAULT: {
            css: {
              h1: {
                color: theme("colors.primary.text/1"),
              },
              h2: {
                color: red,
              },
              a: {
                position: "relative",
                "font-weight": "600",
                "text-decoration": "none",
                color: red,
                "background-image": `linear-gradient(${red}
                , ${red})`,
                "background-repeat": "no-repeat",
                "background-size": "0% 2px",
                "background-position": "left bottom",
                transition: ".3s background-size ease",
                "&:hover": {
                  "background-size": "100% 2px",
                },
              },
              code: {
                padding: "1px",
                background: "#737d8c2b",
                "border-radius": "3px",
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
