const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    demo: './demo/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    //   {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: [ 'babel-loader' ]
    // },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      } ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['demo'],
      template: 'demo/index.html',
      filename: 'demo.html'
    })
  ]
}