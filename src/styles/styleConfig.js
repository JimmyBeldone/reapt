const path = require("path");

const resources = ["_colors.styl", "_sizes.styl", "_mixins.styl"];

module.exports = resources.map(file =>
    path.resolve(__dirname, "config/", file)
);
