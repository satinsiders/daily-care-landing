/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00B894",
        dark:   "#121212",
        light:  "#F9F9F9"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body:    ["Inter", "ui-sans-serif", "system-ui"]
      },
      animation: {
        marquee: "marquee 35s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },      // start
          "100%": { transform: "translateX(-50%)" }    // after one full set
        }
      }
    }
  },
  plugins: []
};
