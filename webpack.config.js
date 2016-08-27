module.exports = {
    entry: './app/app.js',
    output: {
        path: './build',
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
            }
        ]
    }
};
