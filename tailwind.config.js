const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      colors: {
        "main-blue": "#1136a6",
        "light-blue": "#86a0fc",
        "some-light-blue": "#e8eeff",
        "very-light-blue": "#f0f3fc",
      },
    },
  },
  plugins: [],
}
