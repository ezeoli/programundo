/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#0081ce",
        secondary: "#0039ab",
        tertiary: " #0c1e7e",
        success: "#2dd36f",
        warning: "#ffc409",
        danger: "#eb445a",
        medium: "#92949c",
        light: "#dfd9f9",
      },
    },
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '955px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
  ],
}
