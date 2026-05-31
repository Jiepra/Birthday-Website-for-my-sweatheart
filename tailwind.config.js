/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          bg: "#FFF7F3",
          primary: "#E76F8A",
          secondary: "#F7B7C3",
          text: "#3B2F2F",
          accent: "#D4A373",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
