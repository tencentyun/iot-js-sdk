const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/sdk.js'),
  output: {
    path: path.join(__dirname, '../dist')
  }
};