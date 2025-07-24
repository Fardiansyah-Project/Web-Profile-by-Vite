/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    container:{
      center: true,
      padding: "16px"
    },
    extend: {
      colors:{
        primary: "#06b6d4",
        secondary: "#0f172a",
        danger:"#D00B00D"
      }
    },
    screens:{
      "2xl": "1230px",
    }
  },
  plugins: [],
}

