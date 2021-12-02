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
      2: "2px",
      4: "4px",
      6: "6px",
      10: "10px",
      15: "15px",
    },

    extend: {
      screens: {},
      colors: {
        green: "#0b9446",
       // black: "#2a2c2a",
        red: "#d71d24",
        yellow: "#ffd250",
        pink: "#DF1995",
        blue: " #27C5CD",
        white_grey: '#f7f7f7'
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      width: {
        '30': '30%',
       
      },

      inset: {
        '1/20': '5%',
        '1/10': '10%',
        '-1/10': '-10%',
        '1/6': '16%',
        '1/5': '20%',
        '-1/5': '-20%',
        '-1/6': '-15%',
        '-1/3': '-33%',
        '-2/5': '-40%',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '8/12': '66%',
       },
       margin: {
        '-1/2': '-50%',
        '-2/5': '-40%',
        '-1/3': '-30%',
        '-1/4': '-25%',
        '-1/5': '-20%',
        '-1/6': '-15%',
        '-1/10': '-10%',
        '-1/20': '-5%',
        '1/6': '15%',
        '1/2': '50%',
        '3/5': '60%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
        '19%': '19%',
       },

       padding: {
        '-1/2': '-50%',
        '-2/5': '-40%',
        '-1/3': '-30%',
        '-1/4': '-25%',
        '-1/5': '-20%',
        '-1/6': '-15%',
        '-1/10': '-10%',
        '-1/20': '-5%',
        '1/6': '15%',
        '1/2': '50%',
        '3/5': '60%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
        '19%': '19%',
       },
     
    },
    opacity: {
      ...defaultTheme.opacity,
      '15': '.15',
    },
    scale: {
      ...defaultTheme.scale,
     '160': '1.6',
     '170': '1.7',
     '180': '1.8',
     '200': '2',
    }
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus", ],
      margin: ['hover'],
      translate: ['group-hover'],
    },
  },
 
  plugins: [],
}
