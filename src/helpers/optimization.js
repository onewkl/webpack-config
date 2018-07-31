var { globalObjectKey } = require("../constants.js");
var { useCommonChunk } = global[globalObjectKey];
module.exports = function() {
    if(!useCommonChunk) return {
        runtimeChunk: false,
        splitChunks: false
    };
    return {
        runtimeChunk: {
            name: "webpack-bootstrap"
        },
        splitChunks: {
            chunks: "all",
            minSize: 3000,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 5,
            automaticNameDelimiter: "-",
            name: true,
            cacheGroups: {
                vendors: {
                    name:'vendors',
                    minChunks:1,
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10
                },
                common: {
                    name: "common",
                    minChunks: 2,
                    priority: 1
                },
                default: false
            }
        }
    };
};
