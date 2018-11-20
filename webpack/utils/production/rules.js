/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssFixie = require("postcss-fixie");
const combineSelectors = require("postcss-combine-duplicated-selectors");
const MQPacker = require("css-mqpacker");
const postcssPresetEnv = require("postcss-preset-env");

const styleResources = require("../../../src/styles/styleConfig");

const LEGACY_CONFIG = "legacy";
const MODERN_CONFIG = "modern";

// eslint-disable-next-line consistent-return
exports.configureStyleLoader = () => ({
    test: /\.styl$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                importLoaders: 2,
                sourceMap: true
            }
        },
        "resolve-url-loader",
        {
            loader: "postcss-loader",
            options: {
                sourceMap: false,
                plugins: () => [
                    postcssPresetEnv(),
                    postcssFixie,
                    MQPacker,
                    combineSelectors({
                        removeDuplicatedProperties: true
                    })
                ]
            }
        },
        "stylus-loader",
        {
            loader: "sass-resources-loader",
            options: {
                resources: styleResources
            }
        }
    ]
});

// eslint-disable-next-line consistent-return
exports.configureImageLoader = buildType => {
    if (buildType === LEGACY_CONFIG) {
        return {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[hash].[ext]"
                    }
                }
            ]
        };
    }
    if (buildType === MODERN_CONFIG) {
        return {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[hash].[ext]"
                    }
                },
                {
                    loader: "img-loader",
                    options: {
                        plugins: [
                            require("imagemin-gifsicle")({
                                interlaced: true
                            }),
                            require("imagemin-mozjpeg")({
                                progressive: true,
                                arithmetic: false
                            }),
                            require("imagemin-optipng")({
                                optimizationLevel: 5
                            }),
                            require("imagemin-svgo")({
                                plugins: [{ convertPathData: false }]
                            })
                        ]
                    }
                }
            ]
        };
    }
};
