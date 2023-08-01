/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#D9D9D9",
            "primary-red": "#ff445c",
            "cart-item": "#212121",
         },
      },
   },
   plugins: [],
};
