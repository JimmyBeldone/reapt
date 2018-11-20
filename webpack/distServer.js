/* eslint-disable radix */
// const browserSync = require("browser-sync");
// const historyApiFallback = require("connect-history-api-fallback");
// const chalk = require("chalk");

// console.log(chalk.blue("Opening production build..."));

// browserSync({
//     port: 4000,
//     ui: {
//         port: 4001
//     },
//     server: {
//         baseDir: "dist"
//     },

//     files: ["src/*.html"],

//     middleware: [historyApiFallback()]
// });
const path = require("path");

const settings = require("./webpack.settings.js");

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
    // compress: true,
    open: true,
    noInfo: true,
    watchOptions: {
        poll: !!parseInt(settings.devServerConfig.poll())
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

module.exports = {
    entry: {
        app: path.join(__dirname, "../dist/index.html")
    },
    devServer: configureDevServer()
};
