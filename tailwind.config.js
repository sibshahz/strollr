/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", ...fontFamily.sans],
      baloo: ["Baloo", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          main: "#1A631B",
          dark: "#124512",
          light: "#478248",
          background: "#F2F8F2"
        },
        secondary: {
          main: "#58CC02",
          dark: "#43C000",
          light: "#89E219",
          background: "#FAFFFA"
        },
        text: {
          primary: "#4B4B4B",
          secondary: "#777777",
          disabled: "#F0F0F0",
          contrast: "#FFFFFF"
        },
        neutrals: {
          main: "#E5E5E5",
          dark: "#AFAFAF",
          light: "#F7F7F7"
        },
        error: {
          main: "#D32F2F",
          dark: "#C62828",
          light: "#EF5350",
          background: "#FDEDED"
        },
        warning: {
          main: "#EF6C00",
          dark: "#E65100",
          light: "#FF9800",
          background: "#FFF4E5"
        },
        info: {
          main: "#0288D1",
          dark: "#01579B",
          light: "#03A9F4",
          background: "#E5F6FD"
        },
        success: {
          main: "#2E7D32",
          dark: "#1B5E20",
          light: "#4CAF50",
          background: "#EDF7ED"
        },
        accent: {
          blue: "#1CB0F6",
          red: "#FF4B4B",
          yellow: "#FFC800",
          orange: "#FF9600",
          purple: "#CE82FF",
          navy: "#2B70C9"
        }
      },
    },
  },
  plugins: [],
}