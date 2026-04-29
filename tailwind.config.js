// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    fontFamily: {
      // Add the colon after 'sans' and ensure everything is quoted correctly
      display: ["var(--font-cormorant)", "serif"],
      sans: ["var(--font-outfit)", "sans-serif"],
    },
  },
};
