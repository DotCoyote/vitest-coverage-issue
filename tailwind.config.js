/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const path = require('path');

module.exports = {
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
  content: [path.resolve(__dirname, './src/**/*.{js,ts,jsx,tsx,mdx}')],
  corePlugins: {
    container: false,
  },
  theme: {},
};
