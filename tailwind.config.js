/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050708',
        'obsidian-secondary': '#090C10',
        'lux-card': 'rgba(10,14,18,0.90)',
        gold: '#E7AD43',
        'gold-light': '#F5BE58',
        'gold-bright': '#FFD06A',
        'text-primary': '#F7F5F0',
        'text-secondary': '#A6A8AD',
        'lux-border': 'rgba(231,173,67,0.18)',
        'lux-border-strong': 'rgba(231,173,67,0.30)',
        'lux-hover': 'rgba(231,173,67,0.08)',
      },
      boxShadow: {
        soft: '0 30px 80px -45px rgba(28, 25, 23, 0.35)',
      },
    },
  },
  plugins: [],
}
