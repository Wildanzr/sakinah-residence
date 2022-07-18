/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1366px',
        '2xl': '1440px'
      }
    },
    backgroundImage: {
      'hero-home': "url('../public/images/bg-1.jpg')"
    }
  },
  plugins: [require('daisyui')]
}
