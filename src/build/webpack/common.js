var Path = require("path");

var config = Path.join(__dirname, "..", "..", "config");

module.exports = {
    requireOptions: function(mode, loader, json) {
        var opts = {};
        
        try {
            // Attempt to load additional options for the loaders.
            var options = require(Path.join(config, mode, "webpack", "loaders", loader));

            // Top level keys are the module itself (eg, css, sass, coffee, etc).
            for (var module in options) {
                if (json) {
                    opts[module] = JSON.stringify(options[module]);
                } else {
                    var parts = [];
                    for (var key in options[module]) {
                        parts.push(key + "=" + options[module][key]);
                    }
                    opts[module] = parts.join("&");
                }
            }
        } catch (e) {}

        return opts;
    }
};
