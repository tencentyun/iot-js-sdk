const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  output: {
    filename: 'iot_sdk.browser.js',
  },
  externals: {
  }
});