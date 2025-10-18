/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        luckiest: ['"Luckiest Guy"', 'cursive']
      },
    },
  },
  plugins: [],
};