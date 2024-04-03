/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'mobile': '373px',
      // => @media (min-width: 373px)

      'tablet': '766px',
      // => @media (min-width: 766px)

      'desktop': '1200px',
      // => @media (min-width: 1200px)
    },
    colors: {
        bgServices: '#eef2ff',
        textOverline: '#d4d4d8',
        white: '#fff',
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        taviraj: ['Taviraj', 'serif'],
      },
      backgroundImage: {
        paralax: "url('/src/assets/images/Paralax/parallax-2.jpg')",
      }
    },
  },
  plugins: [],
}

