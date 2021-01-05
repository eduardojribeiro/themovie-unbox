const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require("fs");
const version = (new Date()).getTime();

module.exports = env => {
	const environment = env || "production";
	const nodeEnv = process.env.NODE_ENV
	
	console.log("You are in _" + nodeEnv + "_ environment");

	const pathsToClean = [
		path.resolve(__dirname, '/dist')
	]

	const plugins = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.html.template",
			version: version,
			filename: "index.html",
			inject: false,
			environment: nodeEnv
		})
	];

	if (environment === 'production') {
		plugins.push(
			new OptimizeJsPlugin({
				sourceMap: false
			})
		)
	}

	return {
		mode: environment,
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "app.bundle.js"
		},
		resolve: {
			extensions: ['.js', '.json'],
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		optimization: {
			minimize: false
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					loader: "babel-loader",
					options: {
						plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
					}
				},{
					test: /\.css$/,
					use: [{ loader: "style-loader" }, { loader: "css-loader", options: { modules: true }}]
				},{
					test: /\.coffee$/,
					loader: "coffee-loader"
				},
				{ 
					test: /\.less$/,
					use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }]
				},
				{
					test: /\.(jpg|gif|ttf|eot|svg|png|mp4|webp)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					use: [{ loader: 'file-loader' }]
				}
			]
		},
		devServer: {
			historyApiFallback: true
		},
		plugins
	};
};