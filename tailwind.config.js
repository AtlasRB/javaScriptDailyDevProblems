/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",     
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#00008B',
      },
      fontFamily: {
        'mono': ['Lucida Console', 'monospace'],
      },
      fontFamily: {
        'GowanBatang': ['Gowan Batang', 'sans-serif']
      },
    },
  },
  plugins: [],
}

