const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	output: {
		path: path.resolve(__dirname, 'lib/'),
		publicPath: '',
		filename: 'index.js',
		libraryTarget: 'umd',
	},
};