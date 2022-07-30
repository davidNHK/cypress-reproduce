/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './cypress/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{.js, cjs}',
  ],
  prefix:"tw-"
};
