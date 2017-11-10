const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const base = require('./app-base.js');

const appProd = webpackMerge(base, {

  plugins: [
    // Resolve global constant ENV to 'prod' during build
    new webpack.DefinePlugin({
      ENV: JSON.stringify('prod'),
    }),
  ],
});

module.exports = appProd;
