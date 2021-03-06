module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ]
    ]
};
