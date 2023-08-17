/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './public/src/index.js',
    head: './public/src/head.js',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'static', 'dist'),
  },
};
