const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ENTRY = require("./entry");
const JSRULE = require("./jsRule");

module.exports = {
  entry: ENTRY,
  module: {
    rules: [
      JSRULE,
      {
        test: /.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // modules: false, //是否开启模块化
              importLoaders: 1,
              // localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "./index.html",
    }),
  ],
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
