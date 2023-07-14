// tailwind config is required for editor support
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    extend: {
      colors: {
        grayScheme: colors.zinc,
        brand: colors.purple,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
