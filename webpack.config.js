const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack/webpack.config.common')

const addons = (addonsArg) => {
    let addons = []
        .concat.apply([], [addonsArg])
        .filter(Boolean)

    return addons.map((addonName) => require(`./webpack/addons/webpack.${addonName}.js`))
}

module.exports = () => {
    const envConfig = require(`./webpack/webpack.config.${process.env.NODE_ENV}.js`)
    const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(process.env.ADDONS))

    return mergedConfig
}
