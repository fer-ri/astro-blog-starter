const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        dark: {
          css: {
            "--tw-prose-body": theme("colors.zinc[400]"),
            "--tw-prose-headings": theme("colors.zinc[200]"),
            "--tw-prose-links": theme("colors.zinc[200]"),
            "--tw-prose-code": theme("colors.zinc[200]"),
            "--tw-prose-pre-code": theme("colors.zinc[800]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
