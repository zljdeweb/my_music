const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = [
    new HtmlWebpackPlugin({
        template:'build/tpl/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin()
]