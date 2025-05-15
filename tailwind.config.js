/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./js/**/*.js",          // jika class ada dalam JS
      "./css/**/*.css",        // jika ada class dinamis di file CSS
    ],
    theme: {
      extend: {
        colors: {
          'neon-blue': '#00f0ff',
          'neon-pink': '#ff00f0',
          'dark-bg': '#0a0a1a',
          'darker-bg': '#050510',
        },
        fontFamily: {
          'orbitron': ['Orbitron', 'sans-serif'],
          'rajdhani': ['Rajdhani', 'sans-serif'],
        },
        animation: {
          'pulse-slow': 'pulse 6s infinite',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        }
      }
    },
    plugins: [],
  }
  