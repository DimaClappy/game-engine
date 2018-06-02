const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    stats: "errors-only",
    compress: false,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   modules: true,
            //   sourceMap: false,
            //   importLoaders: 2,
            //   localIdentName: "[name]__[local]__[hash:base64:5]", // className template
            //   minimize: false
            // }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
});
