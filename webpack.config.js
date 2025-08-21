const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].bundle.js',   // index.bundle.js, about.bundle.js, etc.
    path: path.resolve(__dirname, 'dist'),
    clean: true, // wipe dist/ before build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],   // injects only index.bundle.js
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],   // injects only index.bundle.js
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },
  mode: 'development',
};
