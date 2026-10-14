import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Los valores viven en app/globals.css (:root); acá solo se exponen como utilidades.
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Escala de 5 tamaños: hero, sección, subtítulo, cuerpo, caption.
      fontSize: {
        hero: ['clamp(3rem, 9vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.035em' }],
        section: ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        sub: ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        body: ['1.0625rem', { lineHeight: '1.7' }],
        caption: ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.02em' }],
      },
      borderWidth: { 3: '3px' },
      borderRadius: { brutal: 'var(--radius)' },
      boxShadow: {
        brutal: 'var(--shadow) var(--shadow) 0 var(--ink)',
        'brutal-sm': '3px 3px 0 var(--ink)',
      },
      maxWidth: { copy: '42.5rem' }, // ~680px: columna de las fichas técnicas
    },
  },
  plugins: [],
}

export default config
