const path = require("path");

const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const Stylish = require("webpack-stylish");

const configDev = require("../config/config.development.json");
const configStaging = require("../config/config.staging.json");
const configProd = require("../config/config.production.json");

const commonPaths = require("./commonPaths");

const configFile =
    process.env.NODE_ENV === "development"
        ? configDev
        : process.env.NODE_ENV === "staging"
        ? configStaging
        : configProd;

// const icoPrefix = (process.env.NODE_ENV === 'production')
//     ? 'assets/img-[hash]/'
//     : '[hash]'

const statsActive = process.env.WITH_DASHBOARD ? "normal" : "none";

const config = {
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx",
            ".json",
            ".styl",
            ".css",
            "jpeg",
            "jpg",
            "png",
            "svg",
            "gif",
            ".ico"
        ],
        modules: ["src", "node_modules"]
    },
    entry: {
        app: path.join(__dirname, "../src/index.js")
    },
    output: {
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[name].[hash].bundle.js",
        path: commonPaths.outputPath,
        publicPath: "/"
    },
    stats: statsActive,
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(html|md)$/,
                loader: "raw-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            name: "./assets/fonts/[name].[hash].[ext]" // Output below ./fonts
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.ProgressPlugin(),
        new HTMLPlugin({
            template: "src/index.html",
            favicon: "src/assets/img/favicon.ico",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new Stylish()
    ],
    externals: {
        Config: JSON.stringify(configFile)
    }
};

module.exports = config;
