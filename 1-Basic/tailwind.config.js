/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'myColor' : '#588157',
      },
      fontFamily:{
        'myFont' : ["'Jersey 15'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

