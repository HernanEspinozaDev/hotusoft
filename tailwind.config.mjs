/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        'primary-light': '#2563EB',
        accent: '#A5B4FC',
        'dark-bg': '#0F172A',
        'light-bg': '#F1F5F9',
        'text-primary': '#374151',
        'success': '#22C55E',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
        'gradient-accent': 'linear-gradient(135deg, #2563EB 0%, #A5B4FC 100%)',
      },
    },
  },
  plugins: [],
}
