/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'selector',
  theme: {
    fontSize: {
      mobileTitle: ['26px'],
      tabletTitle: ['35px'],
      desktopTitle: ['45px'],
      mobileDesk: ['15px'],
      tabletDesk: ['15px'],
      desktopDesk: ['15px'],
      
    },
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
        textDescription: '#616161',
        navbarBorder: '#cfd8dc',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        taviraj: ['Taviraj', 'serif'],
      },
      backgroundImage: {
        paralax: "url('/src/assets/images/Paralax/parallax-2.jpg')",
        bgFooter: "url('/src/assets/images/Footer/footer-bg.jpg')",
        bgPricingList: "url('/src/assets/images/PricingList/breadcrumbs-bg.jpg')",
      },
    },
  },
  plugins: [],
});
