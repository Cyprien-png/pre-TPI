/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-logo' : '#1A202C'
      },
      boxShadow: {
        "nav": 'inset 0px -16px 13px -11px #FFF, 0 4px 20px 0px rgba(15,19,26,0.5);'
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  darkMode: 'class',
  plugins: [],
}
