const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const mode = process.env.MODE || "development";

module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "web",
  entry: path.join(__dirname, "/src/index.tsx"),
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx|ts$/,
        loader: "awesome-typescript-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    writeToDisk: false,
    contentBase: "./src/public",
    historyApiFallback: true,
    port: 8080,
    /* proxy: {
      "/profile/api": {
        target: "http://localhost:5000",
        pathRewrite: {
          "/profile": "",
        },
      },
      "/api": {
        target: "http://localhost:5000",
      },
    }, */
  },
};
