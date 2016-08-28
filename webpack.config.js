module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
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
            }
        ]
    },
    resolve: {
        // Default extensions: ["", ".webpack.js", ".web.js", ".js"]
        extensions: ['', '.js', '.css'],
    }
};
