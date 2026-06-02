/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // HTPL design tokens — mirrors the CSS variables in src/index.css so
      // Tailwind utilities (e.g. bg-ink, text-accent) stay in sync with the
      // original "Editorial Split" design language.
      colors: {
        bone: '#efece5',
        'bone-2': '#e6e2d8',
        paper: '#f7f5f0',
        ink: '#18181a',
        'ink-2': '#3a3a3d',
        muted: '#6b6b6e',
        accent: '#d63924',
        'accent-dk': '#a82c1c',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1280px',
      },
      borderRadius: {
        site: '16px',
      },
    },
  },
  plugins: [],
}
