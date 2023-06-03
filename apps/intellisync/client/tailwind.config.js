// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
