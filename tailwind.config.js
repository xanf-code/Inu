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
      },
      colors: {
        'custom-gray': '#151a21',
        'custom-black': '#0b0e11',
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      margin: ['first', 'last'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
