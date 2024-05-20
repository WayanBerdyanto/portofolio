/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screen: {
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        dark: "#222831",
        light: "#EEF7FF",
        primary: "#03AED2",
        secondary: "#FDDE55"
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
    },
    },
  },
  plugins: [],
};
