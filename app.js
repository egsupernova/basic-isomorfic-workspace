import express from "express";
import config from './webpack.config.babel.js'
import webpack from "webpack"
import routes from "./routes"
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import path from 'path'

const isDeveloping = process.env.NODE_ENV !== 'production';

var app = express();
var compiler = webpack(config);

app.set("port", process.env.port || 3000) 
app.set('views' , path.join(__dirname , 'views'))
app.set('view-engine' , 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler , {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(routes)

app.use(express.static(path.join(__dirname , 'public')));


app.listen(app.get('port'), () => console.log(`Server on port: ${app.get('port')}`));