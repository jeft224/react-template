"use strict";
const merge = require("webpack-merge");
const path = require("path");
const BaseWebpackConfig = require("./webpack.base.conf");
// 分离css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 打包之前清除文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 用于压缩js
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 用于压缩css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(BaseWebpackConfig, {
  mode: "production",
  // 出口文件
  output: {
    filename: "js/[name]-[contenthash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    // 配置需要解析文件的loader
    rules: [
      // 添加css的解析loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              piublicPath: "/"
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              piublicPath: "/"
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      // 图片类型文件解析的loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       limit: 5000,
        //       name: "[path][name][hash:8].[ext]", // 将图片打包到了path目录下，并生成原图片名加8位hash值的图片名
        //       outputPath: "images/",
        //       // 图片引入资源的共路径，发布线上时很有用
        //     //   publicPath: "assets/"
        //     }
        //   },
          // 图片压缩
          {
            loader: "image-webpack-loader",
            options: {
              //   bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          },
          //图片编码，生成dataURl,减少http请求，转换成字符串 url-loader是对file-loader的封装
          {
            loader: "url-loader",
            options: {
              // name 同flie-loader
              name: "imgs/[name][hash:8].[ext]",
              // 小于10000字节的转换为DataUrl格式
              limit: 10000,
              // 是否采用file-loader， 默认采用
              // 还可以用responsive-loader等一些其他loader
              fallback: "file-loader",
              // 设置要处理的MIME类型，
            //   mimetype: "image/png"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new CleanWebpackPlugin(["dist/*"], {
      //清除dist目录下为文件
      root: path.resolve(__dirname, "../")
    })
  ],
  optimization: {
    // 分离不常变化的文件
    splitChunks: {
      chunks: "all",
      //  此选项允许您指定用于生成名称的分隔符 默认以~分割
      automaticNameDelimiter: "~",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial"
        }
      }
    },
    minimizer: [
      // 压缩JS
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false, // 去除警告
            drop_debugger: true, // 去除debugger
            drop_console: true // 去除console.log
          }
        },
        cache: true, // 开启缓存
        parallel: true, // 平行压缩
        sourceMap: false // set to true if you want JS source maps
      }),
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
