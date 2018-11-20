const path = require("path");

const moment = require("moment");
const git = require("git-rev-sync");
const CriticalCssPlugin = require("critical-css-webpack-plugin");

const settings = require("../../webpack.settings");
const pkg = require("../../../package.json");

const LEGACY_CONFIG = "legacy";

exports.configureBanner = () => ({
    banner: [
        "/*!",
        ` * @project        ${settings.name}`,
        // eslint-disable-next-line no-useless-concat
        " * @name           " + "[filebase]",
        ` * @author         ${pkg.author}`,
        ` * @build          ${moment().format("llll")} ET`,
        ` * @release        ${git.long()} [${git.branch()}]`,
        ` * @copyright      Copyright (c) ${moment().format("YYYY")} ${
            settings.copyright
        }`,
        " *",
        " */",
        ""
    ].join("\n"),
    raw: true
});

exports.configureBundleAnalyzer = buildType => {
    if (buildType === LEGACY_CONFIG) {
        return { analyzerMode: "static", reportFilename: "report-legacy.html" };
    }
    return { analyzerMode: "static", reportFilename: "report-modern.html" };
};

exports.configureCriticalCss = () =>
    new CriticalCssPlugin({
        base: "dist/",
        src: "index.html",
        dest: "index.html",
        extract: false,
        inline: false,
        minify: true,
        width: 375,
        height: 565
    });

exports.configureWorkbox = () => settings.workboxConfig;

exports.configurePwaManifest = () => ({
    name: pkg.name,
    description: pkg.description,
    short_name: pkg.name,
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
        {
            src: path.resolve("src/assets/img/favicon.ico"),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
    ]
});

exports.configureHtml = () => ({
    // template: "src/index.html",
    inject: false,
    title: "Reapt",
    lang: "fr",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    "X-UA-Compatible": { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    description: "React Starterkit",
    template: path.join("src", "index.ejs"),
    favicon: "src/assets/img/favicon.ico"
    // favicon: "src/assets/img/favicon.ico",
    // minify: {
    //     inject: true,
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true
    // }
});
