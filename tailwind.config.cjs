/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.7em",
              marginTop: "0.1em",
              marginBottom: "0.5em",
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            h2: {
              color: "var(--tw-prose-headings)",
              marginTop: "0.5em",
              marginBottom: "0.5em",
              fontWeight: "400",
            },
            h3: {
              color: "var(--tw-prose-headings)",
              marginTop: "0",
              marginBottm: "0.3em",
              fontWeight: "300",
            },
            p: {
              marginTop: "0",
              marginBottm: "10em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
