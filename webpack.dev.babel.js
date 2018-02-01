import merge from 'webpack-merge'
import common from './webpack.common.babel'
const webpack =require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})
