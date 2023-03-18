/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/Home.js",
    "./src/Components/Navbar.js",
    "./src/Pages/Login.js",
    "./src/Pages/Register.js",
    "./src/Pages/Dashboard.js",
    "./src/Components/ExploreCard.js",
    "./src/Pages/Explore.js",
    "./src/Components/SearchBar.js",
    "./src/Pages/About.js",
    "./src/Pages/NewBusiness.js",
    "./src/Components/BusinessCard.js"
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
