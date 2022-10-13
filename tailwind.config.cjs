/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl': 24,
      '2xl': 32
    },
    colors: {
      'transparent': 'transparent',

      'black': '#000',
      'white': '#fff',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      // ou

      // gray: {
      //   900: '#121214',
      //   800: '#202024',
      //   400: '#7c7c8a',
      //   200: '#c4c4cc',
      //   100: '#e1e1e6',
      // },
      
      'cyan-500': '#81D8F7',
      'cyan-300': '#98E1FB',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
