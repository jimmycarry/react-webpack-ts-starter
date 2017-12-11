var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        vendor: ['react','react-dom'],
        app:'./src/index.tsx'

    },
    output: {
        path: __dirname + '/prod/',
        filename: 'js/[name].[hash:8].js',
        publicPath:'/'
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".less"]
    },
     module: {
        rules:[
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                }),
                include:path.join(__dirname,'node_modules/antd/dist')
        }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'postcss-loader']
                }),
                exclude: /node_modules/,
        },{
            test: /\.(jpe?g|png|gif)/,
            // loader: [
            //     'url?limit=4000&name=images/[name][hash:8].[ext]',
            //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}'
            // ]
            loader:  'url-loader?limit=4000&name=images/[name][hash:8].[ext]',
            },{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'less-loader','postcss-loader']
            }),
            exclude: /node_modules/,
        },
        
         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'js/vendor.bundle.js'}),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console:true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug:false,
            minimize: true,
            options:{
               postcss: [autoprefixer({browsers:['last 8 versions']})]
            }
        }),
        
        new ExtractTextPlugin({ filename: "style.css" }),
        new HtmlPlugin({
            title:'Webpack Typescript Starter Kit'
        })
    ]
};

module.exports=config