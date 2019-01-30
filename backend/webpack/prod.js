const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../bootstrap/index.js"),
    output: {
        filename: 'backend-bundle-prod.js',
        path: path.resolve(__dirname, "../dist")
    },
    target: 'node',
    mode: 'production',
    watch: false,

    resolve: {
        alias: {
            common: path.resolve(__dirname, "../common"),
            frontend: path.resolve(__dirname, "../frontend"),
            backend: path.resolve(__dirname, "../backend")
        }
    },

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