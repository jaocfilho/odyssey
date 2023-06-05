// tailwind config is required for editor support
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
