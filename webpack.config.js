const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isNodeProd = env => env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: isNodeProd ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[file].map[query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: 'index.html',
      templateParameters: {
        scriptFileName: 'bundle.js',
      },
    }),
  ],
  devServer: {
    client: {
      overlay: true,
      progress: true,
    },
    hot: true,
    watchFiles: ['src/**/*.js', 'public/**/*.ts'],
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
      serveIndex: true,
    },
    compress: true,
    port: 9000,
  },
};

