import merge from 'webpack-merge'
import common from './webpack.common.babel'
const webpack =require('webpack')
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = merge(common, {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[{
                        loader: 'css-loader',
                        options:{
                          importLoaders: 1,
                          sourceMap: true
                        }
                      },
                      'postcss-loader'
                    ] 
                })),  
                
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})
