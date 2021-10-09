const path = require("path");

module.exports = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  include: path.resolve(__dirname, "../src"),
  use: {
    loader: "babel-loader",
  },
};
