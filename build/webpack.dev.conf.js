"use strict";
const merge = require("webpack-merge");
const BaseWebpackConfig = require("./webpack.base.conf");
const path = require("path");
const webpack = require("webpack");
module.exports = merge(BaseWebpackConfig, {
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    host: "localhost",
    hot: true,
    inline: true,
    port: 8080,
    overlay: true,
    compress: true, // 服务器返回服务器时启动gzip压缩
    contentBase: path.join(__dirname, "dist"), //静态文件根目录
    proxy: {
      "/api/**": {
        target: "",
        secure: true,
        changeOrigin: true
      }
    }
  },
  output: {
    // 输出
    filename: "js/[name].[hash].js", // 每次保存 hash 都变化
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
              name: "images/[name].[ext]"
              // publicPath: '../'
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
