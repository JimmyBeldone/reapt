const path = require("path");

const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.config.common.js");
const settings = require("./webpack.settings.js");
const {
    configureLinter,
    configureCss,
    configureStyleLoader,
    configureImageLoader
} = require("./utils/development/rules");
const { configureDevServer } = require("./utils/development/server");
const { LEGACY_CONFIG, MODERN_CONFIG } = require("./utils/constants");

const devConfig = buildType => {
    const filename =
        buildType === LEGACY_CONFIG
            ? "[name]-legacy.[hash].js"
            : "[name].[hash].js";
    return {
        output: {
            filename: path.join("./", filename),
            publicPath: `${settings.devServerConfig.public()}/`
        },
        mode: "development",
        devtool: "inline-source-map",
        devServer: configureDevServer(),
        module: {
            rules: [
                configureLinter(),
                configureCss(),
                configureStyleLoader(),
                configureImageLoader()
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join("src", "index.html"),
                favicon: "./src/assets/img/favicon.ico"
            })
        ]
    };
};

module.exports = [
    merge(common.legacyConfig, devConfig(LEGACY_CONFIG)),
    merge(common.modernConfig, devConfig(MODERN_CONFIG))
];
