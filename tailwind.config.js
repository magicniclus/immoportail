/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "purple": "#362676",
      "blue": "#1374F2",
      "yellow": "#F2B544",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      pink: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
}
