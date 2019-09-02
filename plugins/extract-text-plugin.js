const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { buildProd, globalObjectKey, projType } = require("../constants.js");
const {projectType,outputUseHash} = global[globalObjectKey];

let name = '';
let nameProd = '';
let packageVersion = require('../helpers/get-proj-version')();

if(projectType === projType.module){
    name='[name].css';
    nameProd = `[name]-${packageVersion}.min.css`;
}else {
    name = "css/[name].css";
    nameProd = "css/[name]-[hash].min.css";
}

module.exports = new ExtractTextPlugin({
    filename: outputUseHash ? nameProd : name,
    disable: !buildProd,
    allChunks: true
});
