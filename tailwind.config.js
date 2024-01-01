/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cultured: {
          100: '#F9F9F9',
          200: '#F3F3F3'
        },
        gainsboro: '#DADDDE',
        'space-cadet': {
          100: '#2B3041',
          200: '#262B3C'
        },
        charcoal: '#3C4150',
        independence: '#565F7E',
        'light-gray': '#D3D6DA',
        'davys-grey': '#56575D',
        'spanish-gray': '#939B9F',
        'forest-green': '#66A060',
        'old-gold': '#CEB02C'
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        sun: 'url("./assets/sun.jpg")',
        moon: 'url("./assets/dark.png")'
      }
    }
  },
  plugins: []
};