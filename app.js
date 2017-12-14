import express from "express";
import pug from "pug";
import config from './webpack.config.babel.js'
import webpack from "webpack"
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import path from 'path'

console.log("running")
const isDeveloping = process.env.NODE_ENV !== 'production';

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler , {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.listen(3000, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: 3000');
});