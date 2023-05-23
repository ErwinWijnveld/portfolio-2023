/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#E1D7C1',
          DEFAULT: '#8E8768',
          dark: '#323024',
        },
        brown: {
          light: '#B5A28B',
          DEFAULT: '#966C54',
          dark: '#392116',
        },
        dark: '#1B1D1B',
      },
      container: {
        center: true,
        padding: '.5rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1680px',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
