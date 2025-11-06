/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // Dunkelgrau
        accent: '#E11D48',  // Rotton
      },
    },
  },
  plugins: [],
}