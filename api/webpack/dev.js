const path = require("path");


module.exports = {
    entry: path.resolve(__dirname, "../bootstrap/index.js"),
    output: {
        filename: 'backend-bundle-dev.js',
        path: path.resolve(__dirname, "../dist")
    },
    resolve: {
        alias: {
            Common: path.resolve(__dirname, "../../common"),
            Frontend: path.resolve(__dirname, "../../frontend"),
            Backend: path.resolve(__dirname)
        },
        extensions: ['.js', '.json']
    },

    target: 'node',
    mode: 'development',
    watch: true,

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-regenerator', '@babel/transform-runtime']
                }
            }]
        }]
    }
}