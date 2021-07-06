const colors = require('tailwindcss/colors')

module.exports = {
  purge: {

    enabled: true,
    content: [
      './src/**/*.pug',
      './src/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      primary: '#0000cd'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
