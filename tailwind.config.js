module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'no-sens': '1024px',
      'lg': '1440px',
      'xl': '1920px',


    },
    // colors: {
    //   'bg-light': '#FAFAF8',
    //   'bg-dark': '#252C35',
    //   'main-second': '#083D77',
    //   'text-light': '#FAFAF8',
    //   'text-secondary': '#05264E',
    //   'text-dark': '#EBEBD3',
    //   'main-light': '#F4D35E',
    //   'main-dark': '#025259',
    //   'accent-light': '#C2493B',
    //   'accent-dark': '#E2A027',
    //   'dark-glass': 'RGBA(2,0,0,0.72)',
    //   'white': '#FFFFFF',
    //   'card-dark': '#2A464F',
    //   'blue': '#0000FF'

    // },
    extend: {

      container: {
        center: true,

      }

    },
  },
  plugins: [],
}