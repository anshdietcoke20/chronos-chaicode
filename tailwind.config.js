module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        chronos:{
          blue: "#1a56b0",
          "blue-dark": "#0c3d82",
          "blue-light": "#e8f0fb",
          gold: "#f5c200",
          "gold-dark": "#d4a400",
          "gold-light": "#fff9e0",
        },
      },
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
