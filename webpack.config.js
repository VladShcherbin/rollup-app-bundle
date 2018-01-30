module.exports = {
  entry: `${__dirname}/src`,
  output: {
    path: `${__dirname}/build-webpack`,
    filename: 'main-w.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
