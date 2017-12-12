var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var autoprefixer = require('autoprefixer');
const { CheckerPlugin } = require('awesome-typescript-loader')
var config = {
    entry: {
        vendor: ['react', 'react-dom'],
        index: ['webpack-hot-middleware/client?quiet=true&reload=true', './src/index.tsx']
        
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        pathinfo: true
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".less"]
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
        }, {
            test: /\.css/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]-[hash:base64:5]',
                        sourceMap:true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({ browsers: ['last 3 versions', 'iOS 9'] }),
                        ]
                    }
                }
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(jpe?g|png|gif)/,
            loader: 'url-loader?limit=4000&name=images/[name][hash:8].[ext]'
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        sourceMap:true,
                        localIdentName:'[name]__[local]-[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({ browsers: ['last 3 versions', 'iOS 9'] }),
                        ]
                    }
                },
                'less-loader'
                
            ],
            exclude: /node_modules/
        },
        { test: /\.js$/, loader: "source-map-loader", enforce: 'pre' },
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        new webpack.HotModuleReplacementPlugin(),
        new CheckerPlugin()

    ]
};
module.exports = config;