/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      maxWidth: {
        'container': '1141px',
      },
      backgroundImage: {
        'banner': "url('/src/assets/banner.png')",
        'service1' : "url('/src/assets/services1.png')",
        'service2' : "url('/src/assets/services2.png')",
        'service3' : "url('/src/assets/services3.png')",
      },
      fontFamily: {
        'pops': ['ui-sans-serif', 'system-ui']
      },
      colors: {
        'primary' : '#F40404',
        'secondary': '#282828'
      }
    },
  },
  plugins: [],
}