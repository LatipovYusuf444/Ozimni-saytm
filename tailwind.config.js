/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 30px 80px -45px rgba(28, 25, 23, 0.35)',
      },
    },
  },
  plugins: [],
}
