const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
  entry:'./src/client/app.js',
  mode:'development',
  devtool:false,
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
  },
  plugins:[new HtmlWebpackPlugin({
    template:'./src/client/views/index.html',
    filename: 'index..html'
  }),
  new CleanWebpackPlugin(),
],
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
  ]
}
}