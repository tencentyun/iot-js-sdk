const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(base, {
  target: 'node',
  devtool: false,
  output: {
    filename: 'iot_sdk.node.js',
  },
  externals: [nodeExternals()]
});

