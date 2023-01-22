/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#FF82A9",
        yellow: "#FFEBE7",
        pink: "#FFC0BE",
        blue: "#98b3ff",
        teal: "#6863FF"
      },
      spacing: {
        '600': "30em"
      },
    },
  },
  plugins: [],
}
