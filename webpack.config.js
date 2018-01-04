var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: './components/index.jsx',
    output: {

        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

        rules: [{

            test: /\.jsx$/,
            exclude: [/node_modules/, /.idea/, /dist/],
            use: {

                loader: 'babel-loader',
                options: {

                    presets: ['es2015', 'react']
                }
            }
        }]
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};