/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-gray' : 'rgb(201, 201, 201)',
        'black': '#000000',
        'lightPink': "#ebe9e8",
      },
      screens: {
        'xxxl': '1300px',
        'xxl': '1200px',
        'xl': '1000px',
        'l': '850px',
        'sl': '700px',
      }
    },
  },
  plugins: [],
}