/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      red: 'hsl(1, 90%, 64%)',
      blue: 'hsl(219, 85%, 26%)',
      veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
      lightGrayishBlue1: 'hsl(211, 68%, 94%)',
      lightGrayishBlue2: 'hsl(205, 33%, 90%)',
      grayishBlue: 'hsl(219, 14%, 63%)',
      darkGrayishBlue: 'hsl(219, 12%, 42%)',
      veryDarkBlue: 'hsl(224, 21%, 14%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      500: '500',
      800: '800',
    },
  },
  plugins: [],
};
