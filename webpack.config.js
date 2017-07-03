const path = require('path');
const utils = require('./webpack.utils');

const port = {
    web: 88,
    was: 8080
};

const pages = [{
    html: 'index',
    script: 'main',
    css: 'main'
}, {
    html: 'sub',
    script: 'sub'
}];

module.exports = {
    entry: utils.getEntry(pages),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: port.web,
        proxy: {
            '/api': 'http://localhost:' + port.was
        }
    },
    plugins: utils.getPlugins(pages)
};