var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


var express = require('express');
var routes = require("./routes");


var app = new express();
var PORT = process.env.PORT || 1234;
//config.entry.main.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");
var compiler = webpack(config);

app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
));
app.use(webpackHotMiddleware(compiler));
app.use(routes);

app.listen(PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
