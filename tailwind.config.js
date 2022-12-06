module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'no-sens': '1024px',
      'lg': '1440px',
      'xl': '1920px',


    },
    extend: {

      container: {
        center: true,

      }

    },
  },
  plugins: [],
}