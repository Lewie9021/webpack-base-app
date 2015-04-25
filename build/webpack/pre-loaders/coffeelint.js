module.exports = function(mode) {
    return {
        // TODO: Try linting .cjsx files.
        test: /\.coffee$/,
        loader: "coffee-lint-loader",
        exclude: /node_modules/
    };
};
