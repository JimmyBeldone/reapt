/* eslint-disable radix */
const settings = require("../../webpack.settings.js");

exports.configureDevServer = () => ({
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
    clientLogLevel: "none",
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
