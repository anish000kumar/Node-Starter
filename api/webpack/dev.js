const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../bootstrap/index.js'),
  output: {
    filename: 'backend-bundle-dev.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '..', 'app'),
      '@main': path.resolve(__dirname, '..', 'main'),
      '@database': path.resolve(__dirname, '..', 'database'),
      '@helpers': path.resolve(__dirname, '..', 'helpers'),
      '@controllers': path.resolve(__dirname, '..', 'main', 'controllers'),
      '@middlewares': path.resolve(__dirname, '..', 'main', 'middlewares'),
      '@common': path.resolve(__dirname, '..', '..', 'common'),
      '@client': path.resolve(__dirname, '..', '..', 'client'),
      '@api': path.resolve(__dirname, '..', '..', 'api'),
    },
    extensions: ['.js', '.json'],
  },

  target: 'node',
  mode: 'development',
  watch: true,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/transform-regenerator',
                '@babel/transform-runtime',
              ],
            },
          },
        ],
      },
    ],
  },
};
