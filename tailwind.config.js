/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#40E0D0',
        'primary-dark': '#0AEB85',
        background: '#0B272C'
      },
      fontFamily: {
        'title': ['Josefin Sans', 'sans-serif'],
        'body': ['Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
