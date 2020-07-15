const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output:{
        filename:'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[new HTMLPlugin({
        filename:'index.html',
        template:'./src/index.html'
    })]
}