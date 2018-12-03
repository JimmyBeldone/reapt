const path = require("path");

const merge = require("webpack-merge");
const webpack = require("webpack");
// Webpack plugins
const Stylish = require("webpack-stylish");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const Dotenv = require("dotenv-webpack");

// config files
const pkg = require("../package.json");

const settings = require("./webpack.settings");
const { configureBabelLoader } = require("./utils/common/rules");
const { configureManifest } = require("./utils/common/plugins");
const { LEGACY_CONFIG, MODERN_CONFIG } = require("./utils/constants");

const baseConfig = {
    name: pkg.name,
    entry: {
        app: path.resolve(__dirname, "../src/index.js")
    },
    output: {
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[name].[hash].bundle.js",
        path: settings.paths.dist.base,
        publicPath: "/"
    },
    resolve: {
        extensions: [
            "*",
            ".mjs",
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
    stats: "normal",
    // externals: {
    //     Config: JSON.stringify(configFile)
    // },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new ManifestPlugin(configureManifest("manifest.json")),
        new WebpackNotifierPlugin({
            title: "Webpack",
            excludeWarnings: true,
            alwaysNotify: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.ProgressPlugin(),
        new Stylish(),
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
};

// Legacy webpack config
const legacyConfig = {
    module: {
        rules: [configureBabelLoader(LEGACY_CONFIG)]
    }
};

// Modern webpack config
const modernConfig = {
    module: {
        rules: [configureBabelLoader(MODERN_CONFIG)]
    }
};

module.exports = {
    legacyConfig: merge(legacyConfig, baseConfig),
    modernConfig: merge(modernConfig, baseConfig)
};
