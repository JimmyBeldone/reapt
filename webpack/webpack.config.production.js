const path = require("path");

const glob = require("glob");
const webpack = require("webpack");
// Webpack Plugins
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const merge = require("webpack-merge");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
// const ImageminPlImageminPluginugin = require('imagemin-webpack-plugin').default
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// const PreloadWebpackPlugin = require("preload-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

// Config Files
const common = require("./webpack.config.common.js");
// Utils
const configureOptimization = require("./utils/production/optimization");
const {
    configureBanner,
    configureBundleAnalyzer,
    configurePwa
} = require("./utils/production/plugins.js");
const {
    configureStyleLoader,
    configureImageLoader
} = require("./utils/production/rules.js");

const LEGACY_CONFIG = "legacy";
const MODERN_CONFIG = "modern";

const legacyConfig = {
    output: {
        filename: path.join("./", "[name]-legacy.[hash].js")
    },
    mode: "production",
    devtool: "source-map",
    optimization: configureOptimization(),
    module: {
        rules: [
            configureStyleLoader(LEGACY_CONFIG),
            configureImageLoader(LEGACY_CONFIG)
        ]
    },
    plugins: [
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
        new webpack.BannerPlugin(configureBanner()),
        new WebpackPwaManifest(configurePwa()),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(js|css|html)$"),
            threshold: 10240,
            minRatio: 0.8
        }),
        new DuplicatePackageCheckerPlugin({
            verbose: true
        }),
        new BundleAnalyzerPlugin(configureBundleAnalyzer(LEGACY_CONFIG))
    ]
};

const modernConfig = {
    output: {
        filename: path.join("./", "[name].[hash].js")
    },
    mode: "production",
    devtool: "source-map",
    optimization: configureOptimization(),
    module: {
        rules: [
            configureStyleLoader(MODERN_CONFIG),
            configureImageLoader(MODERN_CONFIG)
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.BannerPlugin(configureBanner()),
        new ImageminWebpWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(js|css|html)$"),
            threshold: 10240,
            minRatio: 0.8
        }),
        new DuplicatePackageCheckerPlugin({
            verbose: true
        }),
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
        new BundleAnalyzerPlugin(configureBundleAnalyzer(MODERN_CONFIG))
    ]
};

module.exports = [
    merge(common.legacyConfig, legacyConfig),
    merge(common.modernConfig, modernConfig)
];
