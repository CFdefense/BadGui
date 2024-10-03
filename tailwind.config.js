/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {},
  fontFamily: {
    myFont: ['MyFont', 'sans-serif'],
  },
  
  },
  plugins: [],
};