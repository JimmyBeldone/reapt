const BundleBuddyWebpackPlugin = require("bundle-buddy-webpack-plugin")

const config = {
    plugins: [new BundleBuddyWebpackPlugin({ sam: true })]
}

module.exports = config
