const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.common");

module.exports = merge(base, {
  mode: "production",
  module: {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist"],
    }),
  ],
  devServer: {
    port: 3333,
    open: true,
  },
});
