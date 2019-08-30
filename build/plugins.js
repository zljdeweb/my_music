const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {resolveAssetsRootDir} = require('./untils')
module.exports = [
    new HtmlWebpackPlugin({
        template:'build/tpl/index.html'
    }),
    new MiniCssExtractPlugin({
        filename:resolveAssetsRootDir('css/[name].css')
    })
    // new webpack.HotModuleReplacementPlugin()
]