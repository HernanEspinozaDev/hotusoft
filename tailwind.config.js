/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#101419',
        'action-blue': '#3498DB',
        'structure-blue': '#2C5E8A',
        'dark-charcoal': '#1D232A',
        'off-white': '#EAEAEA',
        'light-gray': '#8899A6',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 94, 138, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}