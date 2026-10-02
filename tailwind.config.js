/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1ebf5',
          200: '#b8d2eb',
          300: '#85b3de',
          400: '#4c8dcd',
          500: '#236eb7',
          600: '#0c529c',
          700: '#003366', // Authentic ISI Navy Blue
          800: '#002147', // Official ISI Header Deep Navy
          900: '#001530', // Deepest Navy
          950: '#000c1e', // Ultra Dark Navy Accent
        },
        'isi-gold': {
          50: '#fdfbe8',
          100: '#fbf4c3',
          200: '#f7e789',
          300: '#f2d54f',
          400: '#e5bd24',
          500: '#d4af37', // Academic Crest Gold
          600: '#b8860b', // Deep Gold Accent
          700: '#8c6107',
          800: '#734c0e',
          900: '#613e11',
        },
        'isi-crimson': {
          600: '#991b1b',
          700: '#8b0000',
          800: '#7f1d1d',
        },
        saffron: {
          500: '#d97706',
          600: '#b45309',
        },
        ink: '#0f172a',
        paper: '#f8fafc',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 51, 102, 0.06)',
        academic: '0 4px 20px -2px rgba(0, 33, 71, 0.12)',
        header: '0 2px 10px rgba(0, 33, 71, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
        display: ['Cinzel', 'Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

