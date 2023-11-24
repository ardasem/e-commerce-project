/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend:{
      backgroundImage: {
        'hero-pattern-one': "url('./assets/hero1.jpg')",
        'list-pattern-one': "url('./assets/productlist1.png')",
        'product-pattern-one': "url('./assets/productCard.png')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#17213C',
        'grey': '#737373',
        'light-grey': '#E6E6E6',
        'light-blue': '#23A6F0',
        'dark-blue': '#252B42',
        'light-green': '#47AD97',
        'green': '#2DC071',
      },
      fontFamily: {
        monsterrat: ['Monsterrat', 'sans-serif'],
        serif: ['Monsterrat', 'serif'],
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

