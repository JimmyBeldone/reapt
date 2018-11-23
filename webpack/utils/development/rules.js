const styleResources = require("../../../src/styles/styleConfig");
const { LEGACY_CONFIG, MODERN_CONFIG } = require("../constants");

exports.configureLinter = () => ({
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader"
});

exports.configureCss = () => ({
    test: /\.css$ /,
    use: ["style-loader", "css-loader"]
});

exports.configureStyleLoader = buildType => ({
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
});

exports.configureImageLoader = () => ({
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
