/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor: {
        'custom-gray': '#424242',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

