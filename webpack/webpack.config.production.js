const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const postcssFixie = require('postcss-fixie')
const cssNext = require('postcss-cssnext')
const combineSelectors = require('postcss-combine-duplicated-selectors')
const MQPacker = require('css-mqpacker')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const chalk = require('chalk')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PreloadWebpackPlugin = require('preload-webpack-plugin')

const pjson = require('../package.json')

const commonPaths = require('./commonPaths')

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.styl/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            plugins: (loader) => [
                                cssNext,
                                postcssFixie,
                                MQPacker,
                                combineSelectors({ removeDuplicatedProperties: true })
                            ]
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: require(path.join(process.cwd(), './src/styles/styleConfig'))
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
                    name: 'vendors',
                    chunks: 'all',
                    priority: -20
                },
                react: {
                    name: 'react',
                    test: 'react',
                    enforce: true
                },
                // CSS Chunks
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: {
            name: 'manifest'
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
            filename: './[name].[hash].css',
            chunkFilename: './[id].[hash].css'
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        }),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css|html)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new Visualizer({
        //     filename: './stats.html'
        // }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        }),
        new PreloadWebpackPlugin(),
        new SWPrecacheWebpackPlugin({
            ontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger(message) {
                if (message.indexOf('Total precache size is') === 0) {
                    // This message occurs for every build and is a bit too noisy.
                    return;
                }
                console.log(message);
            },
            minify: true, // minify and uglify the script
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
        }),
        new WebpackPwaManifest({
            name: pjson.name,
            description: pjson.description,
            short_name: pjson.name,
            background_color: '#ffffff',
            theme_color: '#ffffff',
            icons: [{
                src: path.resolve('src/assets/img/favicon.ico'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
            }]
        })
    ]
}

module.exports = config;
