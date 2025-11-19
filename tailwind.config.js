/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F5F0',
        beige: '#E8E3D8',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}


