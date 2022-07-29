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
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1366px',
        '2xl': '1440px'
      }
    },
    backgroundImage: {
      'hero-home': "url('../public/images/bg-1.jpg')",
      'banner-1': "url('../public/images/banner1.jpg')",
      'proj-1': "url('../public/images/proj-1.jpg')",
      'proj-2': "url('../public/images/proj-2.jpg')",
      'proj-3': "url('../public/images/proj-3.jpg')"
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      lemon: ['LEMON MILK', ...defaultTheme.fontFamily.sans],
      adlinnaka: ['Adlinnaka', ...defaultTheme.fontFamily.sans],
      monument: ['Monument', ...defaultTheme.fontFamily.sans],
      dancing: ['Dancing Script', ...defaultTheme.fontFamily.sans],
      lora: ['Lora', 'serif', ...defaultTheme.fontFamily.sans],
      ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      cormorant: ['Cormorant SC', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('daisyui')]
}
