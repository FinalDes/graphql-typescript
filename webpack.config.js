const path = require("path");
const webpack = require('webpack');
const fs = require('fs');
const BabiliPlugin = require("babili-webpack-plugin");

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

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
  externals: nodeModules,
  plugins: [
    new BabiliPlugin()
    // new webpack.optimize.UglifyJsPlugin()
  ],
};