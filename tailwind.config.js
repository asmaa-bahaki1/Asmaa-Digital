/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5fa",
          100: "#ffe7f2",
          200: "#ffc9df",
          300: "#ff9fc5",
          400: "#f96da5",
          500: "#d92b78",
          600: "#b51b60",
          700: "#92154d",
          800: "#76163f",
          900: "#611635"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(146, 21, 77, .12)"
      }
    }
  },
  plugins: []
}