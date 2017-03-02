var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        //必须是绝对路径
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './build',
        inline:true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};