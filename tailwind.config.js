/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        charcoal: '#151515',
        gold: '#B79A63',
        pink: '#E94A8A',
        ivory: '#F6F1E8',
        muted: '#BEB3A0'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0, 0, 0, 0.3)',
        glow: '0 8px 30px rgba(183, 154, 99, 0.28)'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.5' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-10px,0) scale(1.02)' }
        }
      },
      animation: {
        floatSlow: 'floatSlow 12s ease-in-out infinite',
        pulseSoft: 'pulseSoft 10s ease-in-out infinite',
        fadeUp: 'fadeUp 1000ms ease forwards',
        drift: 'drift 16s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
