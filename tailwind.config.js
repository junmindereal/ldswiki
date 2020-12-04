const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      gray: colors.blueGray,
      yellow: colors.amber
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1E293B'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
