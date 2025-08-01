const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors:{
        'param-blue': '#1A3B6A', // Your specific deep blue
        'param-gold': '#B8860B',
        'light-gray-bg': '#F8F8F8' // Your specific muted gold
      },
      screens: {
        'custom': '900px',
      },},
  },
  plugins: [require("flowbite/plugin"), flowbiteReact],
}