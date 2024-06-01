/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: { /** Extend tailwind's colors and fonts here */
      colors:{
        primary:{
          50: '#250343',
          100: '#140864', /**rgb(20,8,100),rgb(64,31,173),rgb(103,65,222),rgb(167,116,227),rgb(91,54,136) */
          200: '#401fad',
          300: '#6741de',
          400: '#1B0D82',
        },
        secondary:{
          50: '#a774e3',
          100: '#5b3688',
          200: '#D06CC6',
        }
      }
    },
  },
  plugins: [],
}

