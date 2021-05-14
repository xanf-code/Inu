module.exports = {
  corePlugins: {
    animation: true,
  },
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
