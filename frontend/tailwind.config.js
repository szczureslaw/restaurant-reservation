// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        secondary: '#F5F5DC',
        accent: '#D4AF37',
        dark: '#2D2D2D',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}