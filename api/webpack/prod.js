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
            '@app': path.resolve(__dirname, "..", "app"),
            '@database': path.resolve(__dirname, "..","database"),
            '@helpers': path.resolve(__dirname,"..","helpers"),
            '@controllers': path.resolve(__dirname,"..","app",'controllers'),
            '@middlewares': path.resolve(__dirname,"..","app",'middlewares'),
            '@resources': path.resolve(__dirname,"..","app",'resources'),
            '@common': path.resolve(__dirname, "..", "..", 'common'),
            '@client': path.resolve(__dirname, "..", "..", 'client')
        },
        extensions: ['.js', '.json']
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