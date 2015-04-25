module.exports = function(mode) {
    return {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
    };
};
