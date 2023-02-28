/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-logo' : '#1A202C'
      },
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
