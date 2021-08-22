// https://createapp.dev/webpack
const path = require("path");

module.exports = {
  entry: './src/test.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    //contentBase: './dist', // errors
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    ],
  },
};