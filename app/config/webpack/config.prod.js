const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[fullhash].min.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|woff2|woff|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[fullhash].[ext]',
            limit: 70000, //70kb
            publicPath: baseConfig.output.publicPath
          },
        }]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].min.css'
    })
  ]
});