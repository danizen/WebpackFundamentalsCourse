var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    devtool: 'source-map',
    entry: [
        './app',
        './utils'
    ],
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.es6' ]
    }
};