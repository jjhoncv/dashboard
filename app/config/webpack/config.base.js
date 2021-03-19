const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '../../')

// const publicPath = process.env.PATH_STATIC + '/';
const publicPath = '/';


module.exports = {
  devtool: 'source-map',
  entry: path.join(rootPath, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|woff2|woff|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]',
            limit: 70000, //70kb
            publicPath
          },
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      // {
      //   test: /\.svg$/,
      //   use: [{
      //     loader: '@svgr/webpack',
      //     options: {
      //       loader: 'url-loader', options: {
      //         name: '[name].[hash].[ext]',
      //         limit: 70000, //70kb
      //         publicPath
      //       }
      //     }
      //   }]
      // }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(rootPath, 'dist'),
    filename: '[name].js',
    publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'public/index.html')
    }),
  ]
};