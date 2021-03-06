'use strict';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

var app = new (require('express'))();
const DEFAULT_PORT = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(DEFAULT_PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> Listening on port ${DEFAULT_PORT}. Open up http://localhost:${DEFAULT_PORT}/ in your browser.`);
  }
});
