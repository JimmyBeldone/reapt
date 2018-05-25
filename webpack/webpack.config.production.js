const webpack = require('webpack')
const path = require('path')
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
                                combineSelectors({removeDuplicatedProperties: true})
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
        namedModules: true,
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
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css|html)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new Visualizer({
            filename: './stats.html'
        })
    ]
}

module.exports = config;
