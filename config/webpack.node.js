const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  target: 'node',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'iot_sdk.node.js',
  },
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate'
  },
});