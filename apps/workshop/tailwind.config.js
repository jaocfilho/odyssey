// tailwind config is required for editor support
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/cosmic-ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
