/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}", // Lägg till alla filtyper som du använder
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#a7bd96",
        green: "#072811",
      },
    },
  },
  plugins: [],
};
