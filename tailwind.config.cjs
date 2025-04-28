/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        dark: {
          bg: '#1A1A1A',
          card: '#2A2A2A',
          text: '#E5E5E5'
        }
      }
    }
  },
  plugins: [],
}
