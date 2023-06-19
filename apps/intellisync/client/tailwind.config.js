// tailwind config is required for editor support
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../packages/tailwind-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    extend: {
      colors: {
        grayScheme: colors.gray,
        brand: colors.indigo,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
