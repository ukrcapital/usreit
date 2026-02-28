/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        header: '1201px',
        hero: '764px',
        xs: '670px',
      },
      fontFamily: {
        sans: ['"e-ukraine"', 'sans-serif'],
        'e-ukraine': ['"e-ukraine"', 'sans-serif'],
        'e-ukraine-head': ['"e-ukraine-head"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FFCC00',
          hover: '#E6B800',
          light: '#FFD633'
        },
        secondary: {
          DEFAULT: '#101113',
          hover: '#1A1C20',
          dark: '#000000'
        },
        surface: '#F4F4F6',
        // Палітра Inzhur з макета (для bg-inzhur-*, text-inzhur-*, border-inzhur-*)
        inzhur: {
          DEFAULT: '#134169',
          light: '#226e91',
          dark: '#0f3352',
          ink: '#10171f',
          panel: '#1A222B',
          accent: '#9AD32F',
          surface: '#D4DDE7',
        },
        // Нейтральні сірі з design tokens (scraped inzhur.reit) — text-vc-500, bg-vc-100 тощо
        vc: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'vc': '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
        'vc-inner': 'inset 0 2px 4px 0 rgba(0,0,0,.06)',
        'vc-lg': '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',
      },
      borderRadius: {
        'vc': '0.25rem',
        'vc-md': '0.375rem',
        'vc-lg': '0.5rem',
      },
      transitionDuration: {
        'slide': '150ms',
      },
      transitionTimingFunction: {
        'slide': 'ease',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};