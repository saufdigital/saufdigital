/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        "typing": "typing 2s steps(10)", 
        "appear" : "fade-up once ease-linear"
      },
      keyframes:{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "typing": {
          "0%": {
            "font-weight": "light"
          },
          "100%": {
            "font-weight": "bold"
          }
        }
      }
      ,
      colors:{"sauforange" : "#F36C25"}
    },
    fontFamily: {
      'anybody' : ['Anybody' , 'sans-serif'],
      "dmsans" : ['DM Sans' , 'sans-serif'],
      'poppins' : ['Poppins' , 'sans-serif'],
    },
    screens :{
      "mobile" : '320px',
      "tablet" : '640px',
      "laptop" : '1024px'
    },
  

  },
  plugins: [],
}

