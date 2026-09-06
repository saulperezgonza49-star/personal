/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FAF6ED',
        paper: '#FFFDF7',
        ink: '#3A2E28',
        taupe: '#7A6A5D',
        rose: {
          DEFAULT: '#B9776B',
          dark: '#9C5F54',
        },
        sage: '#8A9A7E',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}