var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "coffee");

    return {
        test: /\.coffee$/,
        loader: "coffee?" + (opts.coffee || "")
    };
};
