/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.2em'
    },
    container: {
      center: true,
      screens: {
        xl: '1366px',
        '2xl': '1440px'
      }
    },
    backgroundImage: {
      'hero-home': "url('../public/images/bg-1.jpg')"
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      lemon: ['LEMON MILK', ...defaultTheme.fontFamily.sans],
      adinnaka: ['Adinnaka', ...defaultTheme.fontFamily.sans],
      monument: ['Monument', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('daisyui')]
}
