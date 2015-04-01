var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var webpack = require('webpack');


var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel']
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.(png|jpg)$/,
			loader: 'url?limit=10000'
		}]
	}
}

module.exports = config;