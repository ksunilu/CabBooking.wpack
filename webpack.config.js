var path = require('path');
module.exports = {
	context: path.resolve('client'),
	entry: "./app",
	output: {
		path: path.resolve('build/'),
		publicPath: '/client/assets/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'client'
	},
	devtool: 'sourcemap',
	module: {
		// preLoaders:[
		// 	{
		// 		test: /\.js$/,
		// 		exclude: 'node_modules',
		// 		loader: 'jshint-loader'
		// 	}
		// ],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
		        test: /\.html$/,
		        exclude: /node_modules/,
		        loader: "raw-loader"
		     }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.es6']
	}
}