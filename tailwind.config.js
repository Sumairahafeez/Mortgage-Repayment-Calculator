/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      backgroundColor:{
        body:'hwb(203 89% 1%)',
        lime:' hsl(61, 70%, 52%)'
      },
      height:{
        container: '70vh',
      },
      fontFamily:{
        Main:'Plus Jakarta Sans',
      }
    },
  },
  plugins: [],
}

