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
    //   // цвета для светлой темы
    //   // 'white': '#FFFFFF',
    //   // 'black': '#1c1917',
    //   // 'red-400': '#f87171',
    //   // 'lime-500': '#84cc16',
    //   // 'stone-500': '#78716c',
    //   // 'stone-200': '#e7e5e4',
    //   // 'stone-50': '#fafaf9',
    //   // 'gray-600': '#4b5563',
    //   // 'gray-400': '#9ca3af',
    //   // 'gray-300': '#d1d5db',
    //   // 'gray-200': '#e5e7eb',
    //   // 'blue-300': '#93c5fd',
    //   // 'blue-600': '#2563eb',
    //   // 'blue-800': '#1e40af',
    //   // 'gray-700': '#374151',
    //   // 'card-dark': '#2A464F',


    // },
    extend: {

      container: {
        center: true,

      }

    },
  },
  plugins: [],
}