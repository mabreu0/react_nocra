const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');

module.exports = {
	entry: './src/App.js',

	output: {
		filename: 'App.js',
		path: path.resolve(__dirname, './dist') //good old unix style!
	},

	plugins: [
		new HTMLWebpack({ template: './src/index.html' })
	],

	module: {
		rules: [ 
			{ 
				test: /.(js|jsx)$/, 
				exclude: /node_modules/,

				use: { 
						loader: 'babel-loader', 
					 	options: { 
							presets: ['@babel/preset-env', '@babel/preset-react']
						} 
				}
			},

			{
				test: /\.css$/i,
				use : ['style-loader', 'css-loader'],
			},
		] //end rules array.
	}
}
