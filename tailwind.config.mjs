import typography from '@tailwindcss/typography';

/**** Tailwind config for Astro project ****/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f9ff',
          100: '#e6f2ff',
          200: '#bfe0ff',
          300: '#99ceff',
          400: '#4daaff',
          500: '#1a8cff',
          600: '#0070f3',
          700: '#005ec7',
          800: '#004b9c',
          900: '#003a78'
        }
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 10px 30px -10px rgb(2 6 23 / 0.2)'
      },
      borderRadius: {
        xl: '0.9rem'
      }
    }
  },
  plugins: [typography()]
};
