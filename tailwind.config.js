/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
