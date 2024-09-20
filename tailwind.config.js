/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        green: "#072811",
        lightgreen: "#a7bd96",
        mediumgreen: "#458F5D",
        grey: "#D9D5D5",
      },
    },
  },
  plugins: [],
};
