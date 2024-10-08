/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA5A23',
        backgroundColor: '#FFFFFF',
        grayColor: '#DBDBDB',
        greenColor: '#7AC555',
        lightGreen: '#0ABB71',
        lightBlue: '#D7E4FE',
      },
      fontFamily: {
        mulish: ["Outfit", "sans-serif"],
      },
      fontSize: {
        'custom-size': ['32px', {
          lineHeight: '42px'
        }],
      },
      //Exports exemplares do Tailwind
      // backgroundImage: {
      //   'gradient-lr': 'linear-gradient(to left, #F9FAFB, #E9E9E9)'
      // },
      // keyframes: {
      //   slideLeftToRight: {
      //     '0%': { transform: 'translateX(600%)' },
      //     '100%': { transform: 'translateX(-100%)' }
      //   }
      // },
      // animation: {
      //   slide: 'slideLeftToRight 20s linear infinite',
      //   color: 'transition-colors duration-300 ease-in-out'
      // },
    },
  },
  plugins: [],
}

