/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "violet",
        secondary: "orange",
      },

      fontFamily: {
        hand: ["Pacifico", "cursive"],
      },

      screens: {
        print: { raw: "print" },
      },

      // add background image
      backgroundImage: {
        profile: "url('./large.jpg')",
      },
    },
  },
  plugins: [],
};
