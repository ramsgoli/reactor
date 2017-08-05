var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

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
            }
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(), //minify everything
        new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
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
