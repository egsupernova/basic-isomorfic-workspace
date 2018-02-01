import merge from 'webpack-merge'
import common from './webpack.common.babel'
import webpack from'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

module.exports= merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
})