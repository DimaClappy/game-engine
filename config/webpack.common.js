const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, "../src"),
  public: path.join(__dirname, "../public"),
  build: path.join(__dirname, "../build")
};

module.exports = {
  entry: {
    engine: PATHS.source + "/index.js"
  },
  output: {
    path: PATHS.build,
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      //chunks: ["app", "commonss", "vendors"],
      template: PATHS.public + "/index.html"
    })
  ]
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 0,
  //     maxAsyncRequests: Infinity,
  //     maxInitialRequests: Infinity,
  //     name: true,
  //     cacheGroups: {
  //       default: {
  //         chunks: "async",
  //         minSize: 30000,
  //         minChunks: 2,
  //         maxAsyncRequests: 5,
  //         maxInitialRequests: 3,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       },
  //       vendors: {
  //         name: "vendors",
  //         enforce: true,
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         reuseExistingChunk: true
  //       },
  //       commons: {
  //         name: "commons",
  //         chunks: "initial",
  //         minChunks: 2,
  //         priority: -5,
  //         reuseExistingChunk: true
  //       },
  //       styles: {
  //         name: "commons",
  //         test: /\.scss$/,
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};
