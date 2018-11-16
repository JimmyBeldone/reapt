/* eslint-disable global-require */
const merge = require("webpack-merge");

const addons = addonsArg => {
    const addons = [].concat.apply([], [addonsArg]).filter(Boolean);

    return addons.map(addonName =>
        // eslint-disable-next-line import/no-dynamic-require
        require(`./webpack/addons/webpack.${addonName}.js`)
    );
};

module.exports = () => {
    // eslint-disable-next-line import/no-dynamic-require
    const envConfig = require(`./webpack/webpack.config.${
        process.env.NODE_ENV
    }.js`);
    const mergedConfig = merge(envConfig, ...addons(process.env.ADDONS));

    return mergedConfig;
};
