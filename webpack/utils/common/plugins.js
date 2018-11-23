const settings = require("../../webpack.settings");

exports.configureManifest = fileName => ({
    fileName,
    basePath: settings.manifestConfig.basePath,
    map: file => {
        file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, "$2");
        return file;
    }
});
