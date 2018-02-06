import merge from 'webpack-merge'
import common from './webpack.common.babel'
import webpack from'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from "extract-text-webpack-plugin";


module.exports= merge(common, {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'postcss-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
})