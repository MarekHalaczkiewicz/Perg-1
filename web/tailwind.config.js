module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "940px",
      lg: "1200px",
      xl: "1600px",
    },
    extend: {
      height: {
        100: "36rem",
        200: "50rem",
      },
      fontFamily: {
        magistrat: ["magistrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
