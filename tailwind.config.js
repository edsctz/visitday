/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'relentless-gold': '#BEAF87',
        'obsessed-grey': '#252526',
        'dark-gold': '#746649',
        'digital-black': '#121212',
        'medium-grey': '#727273',
        'link-blue': '#517394',
        'link-light-blue': '#6E8FAF',
        'highlight-red': '#8D312E',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
