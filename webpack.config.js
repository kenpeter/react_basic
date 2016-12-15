var webpack = require("webpack");
var path = require("path");

// create auto dist
// create dist path
var DIST_DIR = path.resolve(__dirname, "dist");

// create src path
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
	// ./src/app/index.js
	entry: SRC_DIR + "/app/index.js", 

	// ./dist/app/bundle.js
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				} 
			}	
		]

	}

};


module.exports = config;
