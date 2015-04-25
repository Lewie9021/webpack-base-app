var ExtractTextPlugin = require("extract-text-webpack-plugin");

var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "css");

    return {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            "style?" + (opts.style || ""),
            "css?" + (opts.css || "")
        )
    };
};
