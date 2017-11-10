const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const base = require('./app-base.js');

const buildPath = path.resolve(__dirname, '../public/app');

const appDev = webpackMerge(base, {
  // Enables source maps that can be accessed in browser dev tools
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: buildPath,
    inline: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('dev'),
    }),
  ],
});

module.exports = appDev;
