/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier New"', "monospace"], // ✅ for p & a
        selfmodern: ['"Self Modern"', "serif"], // ✅ for headings
        poppins: ['"Poppins"', "sans-serif"],
        delatto: ['"De Latto"', "cursive"],
        breakfast: ['"italian-breakfast"'],
        paraline: ['"fonnts.com-Praline-Regular"'],
        Sonophone: ['"Sonophone"'],

        six: ['"Six Caps"', '"Six Caps Placeholder"', "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        italiana: ['"Italiana"', "serif"],
        cinzelDecorative: ['"Cinzel Decorative"', "serif"],
      },
      colors: {
        primary: "#0B3565",
        light: "#ffffff",
        accent: "#fae101",
        dark: "#000000",
        background: "#3778b0",
        blueColor: "#3778b0",
        pinkColor: "#de6fa2",
        orangeColor: "#fae101",
        orangeMix: "#FFB347",
      },
    },
  },
  plugins: [],
};
