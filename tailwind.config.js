/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'blue-1000': '#0F2B46',
        'black-100': '#fff1'
      },
    },
  },
  plugins: [],
}

