var Common = require("../common");

module.exports = function(mode) {
    var opts = Common.requireOptions(mode, "dust");
        
    return {
        test: /\.dust/,
        loader: "dust?" + (opts.dust || "")
    };
};
