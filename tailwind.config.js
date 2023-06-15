/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['danapro', 'sans-serif'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
