const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, '../src/sdk.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    libraryTarget: "umd",
    library: "TencentIotSdk"
  },
  plugins: [
  ],
};