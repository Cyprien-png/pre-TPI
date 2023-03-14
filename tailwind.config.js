/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-logo' : '#1A202C',
        'light-blue': '#45B6FE',
        'light-red' : '#FF5E5E',
        'glass-white' : 'rgba(255,255,255,0.1)',
        'glass-border': 'rgba(255,255,255,0.5)'
      },
      boxShadow: {
        "nav": 'inset 0px -16px 13px -11px #FFF, 0 4px 20px 0px rgba(15,19,26,0.5);',
        "glassy": "2px 2px 10px rgba(0,0,0,0.3);"
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
