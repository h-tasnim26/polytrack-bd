/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
        bangla: ['Hind Siliguri', 'sans-serif'],
      },
      colors: {
        ink: '#071b2d',
        navy: '#0b2942',
        teal: '#11b8a6',
        mint: '#dff8f2',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(5, 31, 51, .10)',
      },
    },
  },
  plugins: [],
}
