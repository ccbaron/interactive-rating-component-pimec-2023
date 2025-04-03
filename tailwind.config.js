/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    colors: {
      orange: "hsl(25, 97%, 53%)",
      "orange-secondary": "rgb(168, 88, 40)",
      white: "#ffffff",
      "light-grey": " hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      black: "black",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 17%, 10%)",
    },

    extend: {
      backgroundImage: {
        "thankyou-illustration": "url('../images/illustration-thank-you.svg')",
      },
    },
  },
  plugins: [],
};

