import path from 'path';
import HtmlWebpackPlugin from  'html-webpack-plugin'
import webpack from 'webpack';
import extractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';



module.exports = {
    entry:{
        index: ['./src/index.js', hotMiddlewareScript],
        app: ['./src/app.js', hotMiddlewareScript]
    },
    module: {
        rules: [
            
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
            filename: "js/commons.js"
        }),
        new CleanWebpackPlugin(['public']),
        new extractTextPlugin({
            filename: (getPath) => getPath('css/[name].css')
        }),
    ],
    output: {   
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../public'),
        publicPath: '/'

    },
    

}