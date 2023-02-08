/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        white: '#FFFFFF',
        brightYellow:'#FFEA00',
        lightBlue: '#00aae5',
        darkGreyishBlue: '#262431',
        grey: '#343a40',
        aquablue: '#00c9db'
      }
    },
  },
  plugins: []
}
