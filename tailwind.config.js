/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comic Sans MS"', '"Comic Sans"', 'cursive'],
        serif: ['"Comic Sans MS"', '"Comic Sans"', 'cursive'],
        mono: ['"Comic Sans MS"', '"Comic Sans"', 'cursive'],
      },
    },
  },
  plugins: [],
}; 