/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Path to your page files
    './src/components/**/*.{js,ts,jsx,tsx}',  // Path to your component files
    './src/app/**/*.{js,ts,jsx,tsx}',  // Path to other app files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
