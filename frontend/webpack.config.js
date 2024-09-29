const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Use ts-loader fo | nullr .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
     {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // Add postcss-loader before sass-loader
          'sass-loader', // Add if you want to use SCSS/SASS with Tailwind
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
     new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template
      filename: 'index.html',
    }),
     new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from 'dist' directory
    },
    compress: true,
    port: 3000, // Port number for development server
    hot: true, // Enable Hot Module Replacement
     historyApiFallback: true,
  },
  mode: 'development', // Development mode configuration
};
