/* eslint-disable */
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
/* eslint-enable */

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                exclude: 'node_modules',
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: 'node_modules',
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: 'node_modules',
                loader: 'url',
                query: {
                    limit: 5000
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d\.\d\.\d)?$/,
                exclude: 'node_modules',
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new DashboardPlugin()
    ],
    resolve: {
        // Default extensions: ["", ".webpack.js", ".web.js", ".js"]
        extensions: ['', '.js', '.css'],
    }
};
