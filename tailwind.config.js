/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scale: {
          "0%": { transform: "translateY(-50%) scale(0.75)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        scale: "scle 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
