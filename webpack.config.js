// require 'path' to call 'path.join'
var path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output: { // build output
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [ // loading to accomplish the transformation from ES6 to Javascript code
      {
        loader: 'babel-loader',
        test: /\.js$/, // looking for all .js files that included a dollar sign, catching everything
        exclude: /node_modules/ //except all .js files in 'node_modules'
      }
    ]
  },
  devServer: { // automatically life code updates
    port: 3000,
    contentBase: './build',
    inline: true // allow us to run on that line of code updating
  }
}