// var path = require('path')

import path from 'path'

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [],

    module: {
        // loaders: [
        //     { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
        //     { test: /\.css$/, loaders: ['style', 'css'] },

        // ],
        rules: [
            {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                exclude: /(node_modules|bower_components)/,
              }
          ]
    }
}
