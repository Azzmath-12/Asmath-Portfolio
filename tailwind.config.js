/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FFFFFF',
        bgSecondary: '#F8F9FC',
        primaryAccent: '#6D28D9',
        hoverAccent: '#7C3AED',
        cardBadgeBg: '#EDE9FE',
        primaryText: '#1F2937',
        secondaryText: '#6B7280',
        lightBorder: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 20px -3px rgba(109, 40, 217, 0.15)',
        'light-card': '0 4px 20px -2px rgba(31, 41, 55, 0.05)',
      }
    },
  },
  plugins: [],
}
