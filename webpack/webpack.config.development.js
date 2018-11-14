const DashboardPlugin = require("webpack-dashboard/plugin");

const styleResources = require("../src/styles/styleConfig");

const plugins = [];

if (process.env.WITH_DASHBOARD) {
    plugins.push(new DashboardPlugin());
}

const config = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: styleResources
                        }
                    }
                ]
            }
        ]
    },
    plugins,
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        compress: true,
        port: 3020,
        open: true,
        noInfo: true,
        host: "localhost"
    }
};

module.exports = config;
