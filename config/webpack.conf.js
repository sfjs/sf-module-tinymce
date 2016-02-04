var path = require('path');
var pkg = require('../package.json');
var webpack = require('webpack');

var BANNER =
    'TinyMCE module for Spiral and sf.js v'+pkg.version+'\n' +
    'https://github.com/sfjs/sf-module-tinymce\n' +
    'Copyright (c) 2016, Yauheni Yasinau, spiralscout.com';

var bannerPlugin = new webpack.BannerPlugin(BANNER);
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true,
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: {
        "sf.tinymce": './src/index.js',  // webpack workaround issue #300
        "sf.tinymce.min": './src/index.js'  // webpack workaround issue #300
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '..', 'dist/')
    },
    resolve: {
        alias: {
            'sf': path.resolve(__dirname, '..', 'node_modules/sf/src/sf')
        },
        extensions: ['', '.js']
    },
    resolveLoader: {
        root: path.resolve(__dirname, '..', 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel?presets[]=es2015&plugins[]=transform-runtime&compact=false',
                exclude: /node_modules/
            }
        ],
        noParse: []
    },
    devtool: 'source-map',
    plugins: [bannerPlugin, uglifyJsPlugin],
    externals: {
        "sf": "sf",
        "tinymce": "Tinymce/tinymce.js"
    }
};
