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

      screens: {
        // Custom breakpoints
        small: { max: '320px' }, // Targets screens from 0px to 320px
        medium: { min: '320.1px', max: '375px' }, // Targets screens from 320.1px to 375px
        large: { min: '375.1px', max: '389px' }, // Targets screens from 375.1px to 425px
        larger: { min: '389.1px', max: '460px' }, // Targets screens from 375.1px to 425px
      },
    },
  },
  plugins: [],
}

