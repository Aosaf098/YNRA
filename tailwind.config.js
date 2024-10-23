/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prociono: ['Prociono', 'serif'],
      },
      colors: {
        'navbar': '#96CEB4'
      },
    },
  },
  plugins: [],
}