/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'lightYellow': '#eeb90b',
      'lightBlue' : '#1f98df',
      'magenta' : '#1a7c5d'
    },
  },
  plugins: [],
}