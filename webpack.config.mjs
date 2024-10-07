import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.mjs',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: 'index.mjs',
  },
  plugins: [new HtmlWebpackPlugin()],
};
