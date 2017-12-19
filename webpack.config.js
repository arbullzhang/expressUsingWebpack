var path = require('path');
var webpack = require('webpack');

module.exports = {
  // 项目入口
  entry: ['webpack-hot-middleware/client', './src/pages/home/app.js'],
  // 打包文件输出路径
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, './public/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpg|png|otf)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
