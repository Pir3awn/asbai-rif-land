/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FF1A',
          light: '#00FF00',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

