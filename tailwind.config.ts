import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Core brand palette (confirmed from store photos) ──────
          black: '#111111',        // store exterior / primary
          'black-soft': '#1C1C1C', // slightly softer black for cards
          red: '#D41F1F',          // promo banners / primary CTA accent
          'red-dark': '#B01818',   // red hover state
          lime: '#C5E000',         // staff uniform highlight
          'lime-dark': '#A8C200',  // lime hover
          // ── Neutrals ─────────────────────────────────────────────
          cream: '#F5F5F5',        // section background
          charcoal: '#2C2C2C',     // body text
          // ── LINE CTA ──────────────────────────────────────────────
          line: '#06C755',
          'line-dark': '#05A847',
          // ── Legacy aliases (kept to avoid breaking btn-line) ──────
          navy: '#111111',         // alias → black
          'navy-dark': '#1C1C1C',
          gold: '#C5E000',         // alias → lime
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        serif: ['Noto Serif TC', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-slow': 'pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
