// var path = require('path')

import path from 'path'

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noinfo: false,
    mode: 'development',
    //entry: './src/index.tsx',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    // electron, node, web are options here
    target: 'web',
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    output: {
        path: path.join(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    // resolve: {
    //     extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.sol']
    // },
    devServer: {
        contentBase: path.join(__dirname, '/dist/'),
        inline: true,
        host: '0.0.0.0',
        port: 3000
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loaders: ['babel'] },
            { test: /\.css?$/, loaders: ['style', 'css'] },

        ]
        // rules: [
        //     {
        //         test: /\.tsx?$/,
        //         loader: "awesome-typescript-loader",
        //         exclude: /(node_modules|bower_components)/,
        //     }
        // ]
    }
}