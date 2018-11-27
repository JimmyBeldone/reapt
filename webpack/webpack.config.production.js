const path = require("path");

const glob = require("glob");
const webpack = require("webpack");
// Webpack Plugins
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const merge = require("webpack-merge");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const LinkTypePlugin = require("html-webpack-link-type-plugin")
    .HtmlWebpackLinkTypePlugin;
const HtmlWebpackMultiBuildPlugin = require("html-webpack-multi-build-plugin");
// const ImageminPlImageminPluginugin = require('imagemin-webpack-plugin').default
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

// Config Files
const common = require("./webpack.config.common.js");
// Utils
const configureOptimization = require("./utils/production/optimization");
const {
    configureBanner,
    configureBundleAnalyzer,
    configurePwaManifest,
    configureWorkbox,
    configureHtml
} = require("./utils/production/plugins.js");
const {
    configureStyleLoader,
    configureImageLoader
} = require("./utils/production/rules.js");
const { LEGACY_CONFIG, MODERN_CONFIG } = require("./utils/constants");

const legacyConfig = {
    output: {
        filename: path.join("./", "[name]-legacy.[hash].js")
    },
    mode: "production",
    devtool: "source-map",
    optimization: configureOptimization(),
    module: {
        rules: [configureStyleLoader(), configureImageLoader(LEGACY_CONFIG)]
    },
    plugins: [
        new webpack.BannerPlugin(configureBanner()),
        new HTMLPlugin(configureHtml()),
        new LinkTypePlugin(),
        new HtmlWebpackMultiBuildPlugin(),
        new MiniCssExtractPlugin({
            // publicPath: './',
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(process.cwd(), "./src")}/**/*`, {
                nodir: true
            })
        }),
        new WebpackPwaManifest(configurePwaManifest()),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(js|css|html)$"),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new DuplicatePackageCheckerPlugin({
        //     verbose: true
        // }),
        new BundleAnalyzerPlugin(configureBundleAnalyzer(LEGACY_CONFIG))
    ]
};

const modernConfig = {
    output: {
        filename: path.join("./", "[name]-modern.[hash].js")
    },
    mode: "production",
    devtool: "source-map",
    optimization: configureOptimization(),
    module: {
        rules: [configureStyleLoader(), configureImageLoader(MODERN_CONFIG)]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.BannerPlugin(configureBanner()),
        new HTMLPlugin(configureHtml()),
        new LinkTypePlugin(),
        new HtmlWebpackMultiBuildPlugin(),
        new WebpackPwaManifest(configurePwaManifest()),
        new MiniCssExtractPlugin({
            // publicPath: './',
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(process.cwd(), "./src")}/**/*`, {
                nodir: true
            })
        }),
        new ImageminWebpWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(js|css|html)$"),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new DuplicatePackageCheckerPlugin({
        //     verbose: true
        // }),
        new WorkboxPlugin.GenerateSW(configureWorkbox()),
        new BundleAnalyzerPlugin(configureBundleAnalyzer(MODERN_CONFIG))
    ]
};

module.exports = [
    merge(common.legacyConfig, legacyConfig),
    merge(common.modernConfig, modernConfig)
];
