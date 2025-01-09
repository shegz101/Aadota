/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'], // Add the font
        voggiet: ['Voggiet', 'sans-serif'], // Add the font
      },
    },
  },
  plugins: [],
}

