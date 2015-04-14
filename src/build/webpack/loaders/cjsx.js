var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "cjsx");
        
    return {
        test: /\.cjsx$/,
        loaders: [
            "coffee?" + (opts.coffee || ""),
            "cjsx?" + (opts.cjsx || "")
        ]
    };
};
