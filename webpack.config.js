const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: [
            './src/app.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        devMiddleware: {
            writeToDisk: true,
            publicPath: '/dist/',
          }
        ,
        historyApiFallback: {
            index: '/',
            disableDotRule: true
        }
    },
    optimization: {
        splitChunks:{
            chunks: 'all'
        }
    },
    // devtool: 'eval-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [/node_modules/, /tests/],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(webp|eot|woff|woff2|svg|jpg|gif|ttf|png)$/i,
                type: 'asset'
            }
        ]
    }
};