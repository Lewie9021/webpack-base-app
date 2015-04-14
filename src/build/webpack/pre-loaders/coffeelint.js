module.exports = function(mode) {
    return {
        test: /\.coffee$/,
        loader: "coffee-lint-loader",
        exclude: /node_modules/
    };
};