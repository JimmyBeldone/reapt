/* eslint-disable radix */
const path = require("path");

const merge = require("webpack-merge");

// config files
const styleResources = require("../src/styles/styleConfig");

const common = require("./webpack.config.common.js");
const settings = require("./webpack.settings.js");

const LEGACY_CONFIG = "legacy";
const MODERN_CONFIG = "modern";

// Configure the webpack-dev-server
const configureDevServer = () => ({
    public: settings.devServerConfig.public(),
    contentBase: "./dist",
    host: settings.devServerConfig.host(),
    port: settings.devServerConfig.port(),
    https: !!parseInt(settings.devServerConfig.https()),
    historyApiFallback: true,
    inline: true,
    quiet: true,
    hot: true,
    hotOnly: true,
    // stats: "errors-only",
    overlay: {
        warnings: true,
        errors: true
    },
    compress: true,
    open: true,
    noInfo: true,
    watchOptions: {
        poll: !!parseInt(settings.devServerConfig.poll())
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

const configureImageLoader = () => ({
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "img/[name].[hash].[ext]"
            }
        }
    ]
});

// Configure the Postcss loader
const configureStyleLoader = buildType => {
    // Don't generate CSS for the legacy config in development
    if (buildType === LEGACY_CONFIG) {
        return {
            test: /\.styl$/,
            loader: "ignore-loader"
        };
    }
    if (buildType === MODERN_CONFIG) {
        return {
            test: /\.styl$/,
            use: [
                "style-loader",
                // {
                //     loader: "css-loader",
                //     options: {
                //         importLoaders: 2,
                //         sourceMap: true
                //     }
                // },
                "css-loader",
                // "resolve-url-loader",
                "stylus-loader",
                {
                    loader: "sass-resources-loader",
                    options: {
                        resources: styleResources
                    }
                }
            ]
        };
    }
    return null;
};

module.exports = [
    merge(common.legacyConfig, {
        output: {
            filename: path.join("./js", "[name]-legacy.[hash].js"),
            publicPath: `${settings.devServerConfig.public()}/`
        },
        mode: "development",
        devtool: "inline-source-map",
        devServer: configureDevServer(),
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader"
                },
                { test: /\.css$ /, use: ["style-loader", "css-loader"] },
                configureStyleLoader(LEGACY_CONFIG),
                configureImageLoader()
            ]
        }
    }),
    merge(common.modernConfig, {
        output: {
            filename: path.join("./js", "[name].[hash].js"),
            publicPath: `${settings.devServerConfig.public()}/`
        },
        mode: "development",
        devtool: "inline-source-map",
        devServer: configureDevServer(),
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader"
                },
                { test: /\.css$ /, use: ["style-loader", "css-loader"] },
                configureStyleLoader(MODERN_CONFIG),
                configureImageLoader()
            ]
        }
    })
];
