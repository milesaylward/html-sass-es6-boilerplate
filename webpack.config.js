const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
  entry: './src/js/index.js',
  mode: env,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
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

if (process.env.NODE_ENV !== 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
  ])
}
