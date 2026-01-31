/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Noto Serif JP"', 'serif'],
        'body': ['"Libre Caslon Text"', 'serif'],
        'logo': ['"Bauhaus Pro"', '"Bauhaus 93"', '"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#051628',
          blue: '#0B213E',
          gold: '#EEDC5B',
          text: '#333333',
          light: '#F9F9F9'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideInUp: 'slideInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}