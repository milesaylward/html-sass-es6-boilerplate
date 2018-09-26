const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
  entry: {
    bundle: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: './index.html' },
      { from: 'src/assets', to: './assets' }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
   ],
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: 'babel-loader'
       },
       {
         test: /\.(sa|sc|c)ss$/,
         exclude: /node_modules/,
         use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
       }
     ]
  }
};
