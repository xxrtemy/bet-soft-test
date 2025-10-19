const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/main.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  devServer: {
    port: 5173,
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy: [
      {
        context: ['/games'],
        target: 'https://belparyaj.com',
        changeOrigin: true,
        secure: true,
        pathRewrite: { '^/games': '' },
      },
      {
        context: ['/pics'],
        target: 'https://bsw-dk1.pragmaticplay.net',
        changeOrigin: true,
        secure: true,
        pathRewrite: { '^/pics': '' },
      },
    ],
  },
};
