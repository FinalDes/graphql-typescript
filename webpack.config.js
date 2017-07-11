const path = require("path");
const webpack = require('webpack');

module.exports = {
  target: "node",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts",".js"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "tslint-loader",
        exclude: /node_modules/,
        options: {
          emitErrors: false,
          failOnHint: true,
          tsConfigFile: "tsconfig.json",
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
};