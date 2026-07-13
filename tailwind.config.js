/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#26246b',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        // Stand-in for the licensed "Canvas Sans" — DM Sans is the closest free match
        canvas: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

