import path from 'path';
import HtmlWebpackPlugin from  'html-webpack-plugin'
import ExtractTextPlugin from "extract-text-webpack-plugin";
import webpack from 'webpack';
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';


module.exports = {
    entry:{
        index: ['./src/index.js', hotMiddlewareScript],
        app: ['./src/app.js', hotMiddlewareScript]
    },
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
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=img/[name].[ext]"},
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                loader: "file-loader?name=fonts/[name]-[hash].[ext]"
            }
        ]
    },
    plugins: [
        
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        }),
        new ExtractTextPlugin("style.css"),
    ],
    output: {   
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'

    },
    

}