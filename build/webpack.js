var Webpack = require("webpack");
var FS = require("fs");

function reporter(err, stats) {
    if (err) { throw err; }

    console.log(stats.toString({
        colors: true,
        version: false,
        hash: false
    }));
}

module.exports.start = function(config) {
    var compiler = Webpack(config);

    if (config.watch) {
        compiler.watch((config.watchDelay || 200), reporter);
    } else {
        compiler.run(reporter);
    }
};
