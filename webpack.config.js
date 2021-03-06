import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = path.resolve();
const PATHS = {
	src: path.join(__dirname, "./src"),
	public: path.join(__dirname, "./public"),
	dist: path.join(__dirname, "./dist"),
	assets: "assets",
};

const config = {
	entry: `${PATHS.src}/index.tsx`,

	output: {
		filename: "index.js",
		path: PATHS.dist,
		clean: true,
	},

	devtool: "source-map",
	externals: {
		path: PATHS,
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},

			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								localIdentName: "[name]__[local]-[hash:base64:5]",
							},
						},
					},
					{
						loader: "resolve-url-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},

			{
				test: /\.(woff(2)?|ttf|eot)$/,
				type: "asset/resource",
				generator: {
					filename: `${PATHS.assets}/fonts/[name][ext]`,
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: `${PATHS.public}/index.html`,
		}),
		new MiniCssExtractPlugin({
			filename: `css/[name].css`,
		}),
	],
};

export default config;
