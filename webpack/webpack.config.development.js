const path = require('path')

let plugins = []

if (process.env.WITH_DASHBOARD) {
    const DashboardPlugin = require('webpack-dashboard/plugin')
    plugins.push(new DashboardPlugin())
}

const config = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: require(path.join(process.cwd(), './src/styles/styleConfig'))
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: './dist',
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
        host: 'localhost'
    }
}

module.exports = config;
