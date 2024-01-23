/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
