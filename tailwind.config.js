

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
      },
      animation:{
        'spin-slow':'spin 20s linear infinite'
      },
     
    },
  },
  plugins: [],
}