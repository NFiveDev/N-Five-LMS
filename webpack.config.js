/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: {
    main: './client/src/index.js',
    head: './client/src/head.js',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
};
