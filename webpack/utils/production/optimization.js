const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const settings = require("../../webpack.settings");

// Configure terser
const configureTerser = () => ({
    cache: true,
    parallel: true,
    sourceMap: true
});

const configureOptimization = () => ({
    noEmitOnErrors: true,
    runtimeChunk: "single",
    minimize: true,
    mergeDuplicateChunks: true,
    splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                    // get the name. E.g. node_modules/packageName/not/this/part.js
                    // or node_modules/packageName
                    const packageName = module.context.match(
                        /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                    )[1];
                    // npm package names are URL-safe, but some servers don't like @ symbols
                    return `npm.${packageName.replace("@", "")}`;
                },
                chunks: "all",
                priority: 20
            },
            common: {
                name: "common",
                minChunks: 2,
                chunks: "async",
                priority: 10,
                reuseExistingChunk: true,
                enforce: true
            },
            // CSS Chunks
            styles: {
                name: settings.vars.cssName,
                test: /\.css$/,
                chunks: "all",
                enforce: true
            }
        }
    },
    minimizer: [
        new TerserPlugin(configureTerser()),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                map: {
                    inline: false,
                    annotation: true
                },
                safe: true,
                discardComments: true
            }
        })
    ]
});

module.exports = configureOptimization;
