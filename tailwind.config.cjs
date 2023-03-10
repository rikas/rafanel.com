/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        amareto: '#FDD46B',
      },
    },
  },
  plugins: [],
};
