const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.scss'],
	},
	output: {
		path: path.resolve(__dirname, 'lib/'),
		publicPath: '',
		filename: 'index.js',
		libraryTarget: 'umd',
	},
};