/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "san-serif"],
        landing: ["Marcellus SC", "san-serif"]
      },
      animation: {
        fadeIn: "fadeIn 0.9s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        layout: "1fr 2fr 1fr",
      },
    },

    
  },
  plugins: [
    
  ],
};
