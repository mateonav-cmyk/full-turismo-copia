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
        brand: {
          50: '#f7f2ff',
          100: '#efe6ff',
          200: '#e0cfff',
          300: '#cca8ff',
          400: '#b073ff',
          500: '#943eff',
          600: '#7f00ff', // Main purple
          700: '#6d00dc',
          800: '#5a00b8',
          900: '#480094',
          950: '#2c005b',
        },
        despegar: {
          purple: '#7f00ff',
          dark: '#1e1035',
          light: '#faf8ff',
          deal: '#ff5a00'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(127, 0, 255, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(127, 0, 255, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px rgba(127, 0, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
