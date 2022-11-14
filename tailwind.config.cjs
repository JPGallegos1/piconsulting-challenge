/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "11px 9px 9px -7px rgba(0,0,0,0.54)",
      },
    },
  },
  plugins: [],
};
