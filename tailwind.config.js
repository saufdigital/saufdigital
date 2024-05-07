/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily:{
        poppins : "'Poppins' , sans-serif",
        dmsans : "'DM Sans' , sans-serif",
        helvetica : ['HELVETICA' , 'sans-serif'],
        helveticalight : ['HELVETICA-LIGHT' , 'sans-serif'],
        couture : ['COUTURE' , 'sans-serif'],
        recoleta: ['RECOLETA' , 'sans-serif']

      },
      animation:{
        slidein: "slidein 1s ease 300ms;",
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        "typing": "typing 2s steps(10)", 
        "appear" : "fade-up once ease-linear",
        "tilt" : "tilt 2s infinite",
        "liquid-fill" : "liquid-fill 2s infinite"
      },
      keyframes:{
        "liquid-fill":{
            "0%" :{
                "background-color": "#4CAF50"
            },
            "50%" :{
              "background-color": "#4CAF50"
            },
            "100%": {
              "background-color": "#4CAF50"
            },
        }
        ,
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "typing": {
          "0%": {
            "font-weight": "light"
          },
          "100%": {
            "font-weight": "bold"
          }
        },
        "tilt": {
          "0%": {
            "transform": "rotate(0deg)"
          },
          "25%": {
            "transform": "rotate(5deg)"
          },
          "50%": {
            "transform": "rotate(10deg)"
          },
          "75%": {
            "transform": "rotate(-5deg)"
          },
          "100%": {
            "transform": "rotate(-10deg)"
          }
        },
      }
      ,
      colors:{"sauforange" : "#FF4800" , "portfoliobg": '#fdb72c'}
    },
    
    screens :{
      "mobile" : '320px',
      "tablet" : '770px',
      "laptop" : '1024px'
    },
  

  },
  plugins: [],
}

