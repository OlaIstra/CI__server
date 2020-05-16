const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin, } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = extension =>
	isDev ? `bundle.${extension}` : `bundle.[hash].${extension}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: ["@babel/polyfill", "./index.js",],
	output: {
		filename: filename("js"),
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js",],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	devtool: isDev ? "inline-source-map" : false,
	devServer: {
		port: 3020,
		hot: isDev,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, "src/favicon.ico"),
				to: path.resolve(__dirname, "dist"),
			},
		]),
		new MiniCssExtractPlugin({
			filename: filename("css"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true,
						},
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
					},
				],
				exclude: /node_modules/,
			},
		],
	},
};
