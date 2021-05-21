module.exports = {
  prefix: 'tw-',
  corePlugins: {
    animation: true,
  },
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus',],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
