/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : '#E6857A',
        'grey' : '#A7ACB1'
      }
    },
  },
  plugins: [],
}