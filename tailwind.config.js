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
        primary: "#3880ff",
        secondary: "#5260ff",
        tertiary: " #5260ff",
        success: "#2dd36f",
        warning: "#ffc409",
        danger: "#eb445a",
        medium: "#92949c",
        light: "#f4f5f8",
      },
    },
  },
  plugins: [],
}
