var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
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
    devtool: "eval",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
        },{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ],
            include:path.join(__dirname,'node_modules/antd/dist')
        },  {
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                'postcss-loader'
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(jpe?g|png|gif)/,
            loader: 'url-loader?limit=4000&name=images/[name][hash:8].[ext]'
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                'less-loader',
                'postcss-loader'
            ],
            exclude: /node_modules/
        },
        { test: /\.js$/, loader: "source-map-loader", enforce: 'pre' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                postcss: [autoprefixer({ browsers: ['last 3 versions'] })]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        new webpack.HotModuleReplacementPlugin(),
        new CheckerPlugin()

    ]
};
module.exports = config;