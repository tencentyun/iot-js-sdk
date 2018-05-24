const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'iot-sdk.browser.js',
  },
  externals: {
  }
});