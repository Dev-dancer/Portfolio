

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '128':'20rem'
      },
      colors: {
        primary: "var(--primary-color)",
        secondary:"var(--secondary-color",
      }
    },
  },
  plugins: [],
}