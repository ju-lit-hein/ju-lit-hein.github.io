/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono', 
          'SF Mono', 
          'Monaco', 
          'Inconsolata', 
          'Fira Mono', 
          'Droid Sans Mono', 
          'Source Code Pro', 
          'monospace'
        ],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        cursor: 'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
};