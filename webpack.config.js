const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization:{
        minimizer:[new OptimizeCSSAssetsPlugin({})]
    },
    plugins:[
        new HTMLPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress: true,
        port: 8989
    }
}