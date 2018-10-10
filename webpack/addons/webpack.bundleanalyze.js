const BundleAnalyzer = require("webpack-bundle-analyzer");

const { BundleAnalyzerPlugin } = BundleAnalyzer;

const config = {
    plugins: [new BundleAnalyzerPlugin()]
};

module.exports = config;
