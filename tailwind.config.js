/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#656565',
        background: '#eff4ff',
        text: '#292929',
        white: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    
    },
  },
  plugins: [],
}

