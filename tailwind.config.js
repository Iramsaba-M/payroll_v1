/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'font-color': '#414040',
        'button-color': '#6366F1',
        'menu-bg': '#E6EDFE',
        'active-icons': '#6366F1',
        'input-border': '#BCC1CA',
        'border-line': '#DEE1E6',
        'placeholder': '#9095A0',
        'button-bg': '#E6EDFE',
        'blue-light': '#DBEAFE',
      },
      fontFamily: {
        'bold': ['Roboto-Bold', 'sans-serif'],
        'medium': ['Roboto-Medium', 'sans-serif'],
        'light': ['Roboto-Light', 'sans-serif'],
        'regular': ['Roboto-Regular', 'sans-serif'],
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

