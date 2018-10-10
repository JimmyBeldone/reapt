const path = require("path");

module.exports = {
    outputPath: path.resolve(__dirname, "../", "dist/"),
    imagesPath: path.resolve(__dirname, "../", "src/assets/"),
    outputImagesPath: path.resolve(__dirname, "../", "dist/assets/"),
    constants: path.resolve(__dirname, "../", "src/constant/"),
    assets: path.resolve(__dirname, "../", "src/assets/"),
    actions: path.resolve(__dirname, "../", "src/actions/"),
    managers: path.resolve(__dirname, "../", "src/managers/"),
    reducers: path.resolve(__dirname, "../", "src/reducers/"),
    utils: path.resolve(__dirname, "../", "src/utils/"),
    components: path.resolve(__dirname, "../", "src/views/components/"),
    pages: path.resolve(__dirname, "../", "src/views/pages/"),
    containers: path.resolve(__dirname, "../", "src/views/containers/"),
    layouts: path.resolve(__dirname, "../", "src/views/layouts/"),
    styleConfig: path.resolve(__dirname, "../", "src/styles/config/mixins.styl")
};
