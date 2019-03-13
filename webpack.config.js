const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/@youseedk'),
        ],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'lib/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
}
