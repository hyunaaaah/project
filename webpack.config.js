const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    entry: './src/js/main',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: './dist',
        port: 88,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{
            from: 'node_modules/bootstrap/dist/css',
            to: 'vendor/bootstrap/css/'
        }, {
            from: 'node_modules/bootstrap/dist/fonts',
            to: 'vendor/bootstrap/fonts/'
        }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['vendor/bootstrap/css/bootstrap.min.css'],
            append: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};