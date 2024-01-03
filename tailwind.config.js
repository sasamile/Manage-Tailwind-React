/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        "vietnam": ['"Be Vietnam Pro"','sans-serif'],
      },
      colors:{
        "bright-red":"hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-ble":"hsl(227, 12%, 61%)",
        "very-dark-blue":"hsl(233, 12%, 13%)",
        "very-pale-red":"hsl(13, 100%, 96%)",
        "vary-light-gray":"hsl(0, 0%, 98%)",
      },
      backgroundImage:{
        "close-menu":"url(.././src/assets/images/icon-close.svg)",
        "open-menu":"url(.././src/assets/images/icon-hamburger.svg)"

      }
    },
    plugins: [],
 
  },
};

 
