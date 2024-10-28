/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'green': '#61b87d',
      'blue': '#074a75',
      'gray': '#727176',
      'white':'#fcfcfc',
      'purple': '#AE85C6',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',

      'pink': '#ff49db',
      'orange': '#ff7849',
      'yellow': '#ffc82c',
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
  ],
}

