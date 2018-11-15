"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
  // 入口文件
  entry: {
    app: "./src/main.js",
    vendors: ["react", "react-dom", "react-router"] // 抽取公共框架
  },
  // 模块解析
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  // 插件
  plugins: [
    // html 用于打包静态的HTML文件
    new HtmlWebpackPlugins({
      title: "react-template",
      filename: "index.html",
      template: path.resolve(__dirname, "../index.html"),
      inject: "true", // 将script标签放置在底部
      cache: true, // 内容变化生成一个新的文件
      hash: true,
      minify: {
        removeComments: true, //移除注释
        collapseWhitespace: true, //压缩document中空白文本节点
        collapseInlineTagWhitespace: true, //压缩行级元素的空白，会保留&nbsp;实体空格
        removeAttributeQuotes: true //压缩 去掉引号
      }
    }),
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
