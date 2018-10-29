const path = require("path");

const glob = require("glob");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const ImageminPlImageminPluginugin = require('imagemin-webpack-plugin').default
const ManifestPlugin = require("webpack-manifest-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// const PreloadWebpackPlugin = require("preload-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const postcssFixie = require("postcss-fixie");
const combineSelectors = require("postcss-combine-duplicated-selectors");
const MQPacker = require("css-mqpacker");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const pjson = require("../package.json");
const styleResources = require("../src/styles/styleConfig");

const config = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.styl/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: false,
                            plugins: () => [
                                postcssPresetEnv(),
                                postcssFixie,
                                MQPacker,
                                combineSelectors({
                                    removeDuplicatedProperties: true
                                })
                            ]
                        }
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: styleResources
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        noEmitOnErrors: true,
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    priority: -20
                },
                react: {
                    name: "react",
                    test: "react",
                    enforce: true
                },
                // CSS Chunks
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        },
        minimize: true,
        mergeDuplicateChunks: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: {
            name: "manifest"
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.AggressiveSplittingPlugin({
        //     minSize: 30000,
        //     maxSize: 50000,
        // }),
        new MiniCssExtractPlugin({
            // publicPath: './',
            filename: "./[name].[hash].css",
            chunkFilename: "./[id].[hash].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(process.cwd(), "./src")}/**/*`, {
                nodir: true
            })
        }),
        // new ({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(js|css|html)$"),
            threshold: 10240,
            minRatio: 0.8
        }),
        new ManifestPlugin({ fileName: "asset-manifest.json" }),
        // new PreloadWebpackPlugin(),
        new SWPrecacheWebpackPlugin({
            ontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: "service-worker.js",
            logger(message) {
                if (message.indexOf("Total precache size is") === 0) {
                    // This message occurs for every build and is a bit too noisy.
                    return;
                }
                console.log(message);
            },
            minify: true, // minify and uglify the script
            navigateFallback: "/index.html",
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
        }),
        new WebpackPwaManifest({
            name: pjson.name,
            description: pjson.description,
            short_name: pjson.name,
            background_color: "#ffffff",
            theme_color: "#ffffff",
            icons: [
                {
                    src: path.resolve("src/assets/img/favicon.ico"),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        }),
        new DuplicatePackageCheckerPlugin({
            verbose: true
        })
    ]
};

module.exports = config;
