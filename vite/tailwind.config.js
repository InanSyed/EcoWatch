/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#242424',
        'base-light': '#2a2a2a',
      }
    },
  },
  plugins: [],
}

