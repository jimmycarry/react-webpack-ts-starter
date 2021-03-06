var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var paths = require('./paths');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var config = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'mobx', 'mobx-react','babel-polyfill'],
        app: './src/index.tsx'

    },
    output: {
        path: __dirname + '/prod/',
        filename: 'js/[name].[hash:8].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".less"],
        alias: {
            '@src': path.resolve(__dirname, './src')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(ts|tsx)$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.less$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'images/[name].[hash:8].[ext]',
                },
            },

            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader?cacheDirectory',
                    {
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader?cacheDirectory'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]_[local]_css_[hash:base64:5]',
                                minimize: true
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
                    ]
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif)/,
                // loader: [
                //     'url?limit=4000&name=images/[name][hash:8].[ext]',
                //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}'
                // ]
                loader: 'url-loader?limit=4000&name=images/[name][hash:8].[ext]',
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]_[local]_less_[hash:base64:5]',
                                minimize: true
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
                    ]
                }),
                exclude: /node_modules/,
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/, loader: "source-map-loader",enforce: 'pre'
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),

        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/vendor.bundle.[hash:8].js',minChunks:Infinity }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),


        new ExtractTextPlugin({ filename: "style/style.[hash:8].css" }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        new CopyWebpackPlugin(
            [
                { from: './external', to: './' }
            ],
            {
                ignore: [
                    // Doesn't copy any files with a txt extension
                    'index.html',
                    '*.md'
                ],

                // By default, we only copy modified files during
                // a watch or webpack-dev-server build. Setting this
                // to `true` copies all files.
                copyUnmodified: true
            }
        )
    ]
};

module.exports=config
