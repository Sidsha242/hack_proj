/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/Home.js",
    "./src/Components/Navbar.js",
    "./src/Pages/Login.js",
    "./src/Pages/Register.js",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F2EEDB',
      }
    },
  },
  plugins: [],
}
