const path = require("path");

const merge = require("webpack-merge");
const webpack = require("webpack");
// Webpack plugins
const HTMLPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const Stylish = require("webpack-stylish");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");

// config files
const pkg = require("../package.json");
const configDev = require("../config/config.development.json");
const configStaging = require("../config/config.staging.json");
const configProd = require("../config/config.production.json");

const settings = require("./webpack.settings.js");
const commonPaths = require("./commonPaths");

const configureBabelLoader = browserList => ({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false,
                        useBuiltIns: "usage",
                        targets: {
                            browsers: browserList
                        }
                    }
                ],
                "@babel/preset-react"
            ],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "react-hot-loader/babel",
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        legacy: true
                    }
                ]
            ]
        }
    }
});

// Configure Manifest
const configureManifest = fileName => ({
    fileName,
    basePath: settings.manifestConfig.basePath,
    map: file => {
        file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, "$2");
        return file;
    }
});

const configFile =
    process.env.NODE_ENV === "development"
        ? configDev
        : process.env.NODE_ENV === "staging"
        ? configStaging
        : configProd;

const baseConfig = {
    name: pkg.name,
    entry: {
        app: path.join(__dirname, "../src/index.js")
    },
    output: {
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[name].[hash].bundle.js",
        path: commonPaths.outputPath,
        publicPath: "/"
    },
    resolve: {
        extensions: [
            "*",
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
    externals: {
        Config: JSON.stringify(configFile)
    },
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
        new WebpackNotifierPlugin({
            title: "Webpack",
            excludeWarnings: true,
            alwaysNotify: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.ProgressPlugin(),
        new HTMLPlugin({
            template: "src/index.html",
            favicon: "src/assets/img/favicon.ico",
            minify: {
                inject: true,
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new Stylish()
    ]
};

// Legacy webpack config
const legacyConfig = {
    module: {
        rules: [
            configureBabelLoader(Object.values(pkg.browserslist.legacyBrowsers))
        ]
    },
    plugins: [
        // new CopyWebpackPlugin(settings.copyWebpackConfig),
        new ManifestPlugin(configureManifest("manifest-legacy.json"))
    ]
};

// Modern webpack config
const modernConfig = {
    module: {
        rules: [
            configureBabelLoader(Object.values(pkg.browserslist.modernBrowsers))
        ]
    },
    plugins: [new ManifestPlugin(configureManifest("manifest.json"))]
};

module.exports = {
    legacyConfig: merge(baseConfig, legacyConfig),
    modernConfig: merge(baseConfig, modernConfig)
};
