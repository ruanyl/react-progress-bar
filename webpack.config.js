module.exports = {
  entry: {
    javascript: "./app/index.js",
    html: "./app/index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?optional[]=runtime&stage=0"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: "style/url!file"
      }
    ]
  },

  devtool: 'source-map',

  externals: {
    //'react': 'React'
  }
};
