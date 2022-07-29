/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'col-span-2',
    'row-span-2'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}