'use strict';

var path = require('path');

var config = {
	entry: path.resolve(__dirname, 'app/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	modules:{
		loaders: [{
			test: /\.js$/,
			loader: 'jsx?harmony'
		},{
			test: /\.(png|jpg)$/,
			loader: 'url?limit=10000'
		},{
			test: /\.css$/,
			loader: 'style!css'
		}]
	}
};

module.exports = config;