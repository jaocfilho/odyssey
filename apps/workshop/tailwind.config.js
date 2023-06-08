// tailwind config is required for editor support
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/tailwind-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        grayScheme: colors.zinc,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
