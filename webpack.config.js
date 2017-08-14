const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                minimize: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                importLoaders: 1
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build/bundle.css')
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public')],
        compress: true,
        port: 8080
    }
}
