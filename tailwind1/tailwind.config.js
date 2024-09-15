/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '80px',
      '2': '120px',
      '3': '160px',
      '4': '240px',
      '5': '320px',
      '6': '480px',
    },
    extend: {
      margin:{
        '1':'2px',
      },
      fontSize: {
        'custom': '2rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'skin':'#eece97',
        'metal': '#565584',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
}

