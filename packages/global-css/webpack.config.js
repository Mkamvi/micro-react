/**
 * @author iWuzhi
 * @date 2021-01-30 15:09:26
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './doc/index.js',
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './doc/index.html',
    }),
  ],
  devServer: {
    port: 3030,
  },
};
