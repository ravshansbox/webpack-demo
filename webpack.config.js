import path from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/** @type {import('webpack').Configuration} */
export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV }),
  ],
  module: {
    rules: [
      { test: /\.png$/, type: 'asset/resource' },
      { test: /\.svg$/, type: 'asset/inline' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  stats: { modules: false },
  devServer: { historyApiFallback: true },
};
