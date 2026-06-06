/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
     colors: {
     bg: '#0D0D0D',
     card: '#1A1A1A',
     primary: '#F59E0B',
     secondary: '#FFFFFF',
     surface: '#1C1C1C',
     },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #F59E0B22 0px, transparent 50%), radial-gradient(at 80% 0%, #F59E0B11 0px, transparent 50%), radial-gradient(at 0% 50%, #F59E0B11 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
