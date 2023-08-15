/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs',
    './client/src/**/*.{js,hbs}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
};
