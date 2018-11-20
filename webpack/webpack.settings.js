const path = require("path");

module.exports = {
    name: "Reapt",
    paths: {
        src: {
            base: "./src/"
        },
        dist: {
            base: "./web/dist/",
            clean: ["./img", "./criticalcss", "./css", "./js"]
        }
    },
    urls: {
        live: "https://example.com/",
        local: "http://example.test/",
        critical: "http://example.test/",
        publicPath: "/dist/"
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        app: path.join(__dirname, "../src/index.js")
    },
    copyWebpackConfig: [
        {
            from: "./src/sw.js",
            to: "[name].[ext]"
        }
    ],
    criticalCssConfig: {
        base: "./dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                url: "",
                template: "index"
            }
        ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:3020",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 3020,
        https: () => process.env.DEVSERVER_HTTPS || false
    },
    manifestConfig: {
        basePath: ""
    },
    workboxConfig: {
        // swDest: ,
        clientsClaim: true,
        skipWaiting: true
    },
    htmlConfig: {
        title: "Reapt",
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        description: "React Starterkit"
    }
};
