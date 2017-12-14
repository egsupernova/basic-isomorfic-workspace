const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
import ExtractTextPlugin from "extract-text-webpack-plugin";
import webpack from 'webpack';


module.exports = {
    entry:[
        'webpack-hot-middleware/client?quiet=true',
        './src/index.js'
    ],
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
            {test: /\.js$/, exclude: /node_modules/, use:["babel-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Workspace',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {   
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'

    },
    

}