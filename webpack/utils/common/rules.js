const browserslist = {
    production: ["> 1%", "last 2 versions", "Firefox ESR"],
    legacy: ["> 1%", "last 2 versions", "Firefox ESR"],
    modern: [
        "last 2 Chrome versions",
        "not Chrome < 60",
        "last 2 Safari versions",
        "not Safari < 10.1",
        "last 2 iOS versions",
        "not iOS < 10.3",
        "last 2 Firefox versions",
        "not Firefox < 54",
        "last 2 Edge versions",
        "not Edge < 15"
    ]
};

exports.configureBabelLoader = buildType => ({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
        "react-hot-loader/webpack",
        {
            loader: "babel-loader",
            options: {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            modules: false,
                            useBuiltIns: "entry",
                            targets: {
                                // eslint-disable-next-line security/detect-object-injection
                                browsers: browserslist[buildType]
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
                    ],
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            regenerator: true
                        }
                    ]
                ]
            }
        }
    ]
});
