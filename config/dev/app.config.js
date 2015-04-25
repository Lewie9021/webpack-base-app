var _ = require("underscore");
var common = require("../common");

// Extend the common properties with mode specific config.
module.exports = _.extend(common, {
    name: common.name + " DEV"
});
