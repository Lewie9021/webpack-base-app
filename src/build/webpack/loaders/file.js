var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "file");
        
    return {
        test: /\.(png|gif|jpg|jpeg|svg|woff|ttf|woff2|eot)$/,
        loader: "file?" + (opts.file || "")
    };
};
