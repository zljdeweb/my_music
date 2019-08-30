const {untils} = require('./untils')
const plugins = require('./plugins')
const Jsrules = require('./rules/JsRules')
const Stylerules = require('./rules/StyleRules')
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry:{
        app:untils('src/index.tsx')
    },
    output:{
        path:untils('dist'),
        filename:'js/[name].js'
    },
    resolve: {
        extensions:['.ts','.tsx','.js','.jsx'],
        plugins:[
            new TsconfigPathsWebpackPlugin({
                configFile:untils('tsconfig.json')
            })
        ]
        // alias:{
        //     "@components":untils('src/components')
        // }
    },
    plugins:[...plugins],
    module:{
        rules:[ ...Jsrules,...Stylerules ]
    }
}