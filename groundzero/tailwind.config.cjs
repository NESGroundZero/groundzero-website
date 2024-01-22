/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBackground: "#1F1B40",
        secondaryBackground: "#2B2853",
        foregroundOrange: "#F28F48",
        foregroundBlue: "#69A9CE",
        foregroundViolet: "#A733BB",
        backgroundComplement: "#2B2853",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkBlue: "#00132A",
        lightBlue: "#64F66F",
        lightGrey: "#D2DB8D",
        white: "#FFFFFF",
        black: "#000000",
        orange: '#FFB800',
        purple: '#D4B2FF'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexendDeca: ["Lexend Deca", "Plus Jakarta Sans"],
        inter: ["Inter", "sans-serif"],
        spartan: ["League Spartan", "Inter"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      tall: {'raw': '(min-height: 768px) and (min-width: 768px)'}
    },
  },
  plugins: [],
};
