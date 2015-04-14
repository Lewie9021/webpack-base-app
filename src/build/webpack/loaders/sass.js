var ExtractTextPlugin = require("extract-text-webpack-plugin");

var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "sass");
    
    return {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
            "css?" + (opts.css || ""),
            "sass?" + (opts.sass || "")
        ].join("!"))
    };
};
