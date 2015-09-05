var path = require('path');
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main.jsx'),

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: path.resolve(ROOT_PATH, 'app')
    }]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    // PROTIP eval-source-map produces a
    // better quality sourcemap, but "eval"
    // is faster and more suitable for large size projects.
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },

    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(ROOT_PATH, 'app')
      }]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
