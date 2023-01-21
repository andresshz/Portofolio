/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'elm': { DEFAULT: '#1D8186', '50': '#D7F6EA', '100': '#BCF0DE', '200': '#86E4CD', '300': '#4FD8C4', '400': '#29BCB5', '500': '#1D8186', '600': '#175C69', '700': '#113D4B', '800': '#0A222E', '900': '#040B11' },
      'cod-gray': {
        DEFAULT: '#121212',
        '50': '#EBEBEB',
        '100': '#DEDEDE',
        '200': '#C4C4C4',
        '300': '#ABABAB',
        '400': '#919191',
        '500': '#787878',
        '600': '#5E5E5E',
        '700': '#454545',
        '800': '#2B2B2B',
        '900': '#121212'
      },
    }
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  daisyui: {
    themes: ["emerald"],
  },
}
