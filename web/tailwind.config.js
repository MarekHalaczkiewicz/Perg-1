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
    fontSize: {
      xxs: ".60rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      height: {
        100: "36rem",
        200: "50rem",
      },
      fontFamily: {
        magistrat: ["magistrat", "sans-serif", "magistrat-italic"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
