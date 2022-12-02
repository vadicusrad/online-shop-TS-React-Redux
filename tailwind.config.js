module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      // => @media (min-width: 640px) { ... }

    },
    extend: {

      container: {
        center: true,

      }

    },
  },
  plugins: [],
}