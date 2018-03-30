const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const clean = plugins => plugins.filter(x => !!x);

const JSFilenameIdentifier = '[name].[chunkhash:8].js';

module.exports = {
  mode: !isProduction ? 'development' : 'production',
  devtool: !isProduction ? 'cheap-module-source-map' : 'source-map',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: JSFilenameIdentifier,
  },
  performance: !isProduction
    ? false
    : {
      hints: 'warning',
    },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: clean([
    new HtmlPlugin({
      inject: true,
      template: 'src/index.html',
    }),

    isProduction &&
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
  ]),
};
