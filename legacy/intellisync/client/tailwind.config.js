// tailwind config is required for editor support
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../packages/cosmic-ui/src/**/*.{js,ts,jsx,tsx}',
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
