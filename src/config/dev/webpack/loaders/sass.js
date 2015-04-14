module.exports = {
    css: {
        sourceMap: true
    },
    sass: {
        outputStyle: "expanded"
        // Source maps don't seem to work with the current version of sass-loader.
        // https://github.com/jtangelder/sass-loader/issues/81
        // sourceMap: true,
        // sourceMapContents: true
    }
};
