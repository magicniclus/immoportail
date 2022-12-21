/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out',
        }
      }
    },
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
