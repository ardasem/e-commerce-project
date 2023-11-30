/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend:{
      backgroundImage: {
        'hero-pattern-one': "url('/public/assets/hero1.jpg')",
        'list-pattern-one': "url('/public/assets/productlist1.png')",
        'product-pattern-one': "url('/public/assets/productCard.png')",
       
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'light-blue': '#23A6F0',
        'blue': '#17213C',        
        'dark-blue': '#252B42',
        'transparent-grey': '#FAFAFA',
        'light-grey': '#BDBDBD',
        'md-grey': '#737373',
        'light-green': '#47AD97',
        'green': '#2DC071',
      },
      fontFamily: {
        montserrat: ['Monsterrat', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },  
  plugins: [],
}

