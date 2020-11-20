module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            filename: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
      {
        test: /\.(mp3|pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            filename: "[name].[hash].[ext]",
            outputPath: "media",
          },
        },
      },
    ],
  },
};
