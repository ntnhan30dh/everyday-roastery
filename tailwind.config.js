const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxsm: "400px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    borderWidth: {
      10: "10px",
      15: "15px",
    },

    extend: {
      screens: {},
      colors: {
        green: "#0b9446",
        black: "#2a2c2a",
        red: "#d71d24",
        yellow: "#ffd250",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      width: {
        '30': '30%',
       
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
