/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-inter)",
      },
      screens: {
        'sm': '480px',   // mobile view (big phones / small tablets)
        'md': '768px',   // tablet view
        'lg': '1024px',  // laptops / small desktops
        'xl': '1280px',  // large desktops
        '2xl': '1536px', // extra large screens
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
