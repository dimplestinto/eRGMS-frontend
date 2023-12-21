/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#137300",
        secondaryColor: "#FFD351",
        tertiaryColor: "#FAFAFA", 
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

