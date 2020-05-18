const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = extension =>
	isDev ? `bundle.${extension}` : `bundle.[hash].${extension}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: ["@babel/polyfill", "./index.js"],
	output: {
		filename: filename("js"),
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
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
			favicon: path.resolve(__dirname, "src/favicon.ico"),
			template: "index.html",
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new MiniCssExtractPlugin({
			filename: filename("css"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					isDev
						? "style-loader"
						: {
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
			{
				test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
