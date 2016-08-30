/* eslint-disable */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist',
        filename: '/js/[name].js'
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: 'node_modules',
                loader: 'url',
                query: {
                    limit: 5000,
                    name: '/assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d\.\d\.\d)?$/,
                exclude: 'node_modules',
                loader: 'file',
                query: {
                    name: '/assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', '/js/vendor.bundle.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                NODE_ENV: process.env.NODE_ENV
            })
        }),
        new ExtractTextPlugin('/css/app.bundle.css'),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            template: './index-template.html'
        })
    ],
    resolve: {
        // Default extensions: ["", ".webpack.js", ".web.js", ".js"]
        extensions: ['', '.js', '.css'],
    }
};
