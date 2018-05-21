const path = require('path');
var Webpack=require('webpack')


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },
    
    {
      test: /\.css$/,
      include: path.join(__dirname, '/src/css'),
      loaders: ["style-loader","css-loader"]
    }
    ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};