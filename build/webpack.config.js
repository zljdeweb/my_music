const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        app:path.join(__dirname,'./../','src/index.tsx')
    },
    output:{
        path:path.join(__dirname,'./../','dist'),
        filename:'[name].js'
    },
    resolve: {
        extensions:['.ts','.tsx','.js','.jsx'],
        plugins:[
            new TsconfigPathsWebpackPlugin({
                configFile:path.join(__dirname,'./../','tsconfig.json')
            })
        ]
        // alias:{
        //     "@components":path.join(__dirname,'./../','src/components')
        // }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'build/tpl/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                use:[{
                    loader:'awesome-typescript-loader',
                    options:{
                        useCache:true,
                        cacheDirectory:path.join(__dirname,'./../','.cache-loader')
                    }
                }]
            },
            {
                test:/\.scss$/,
                include:[path.join(__dirname,'./../','src')],
                use:[
                    'style-loader',
                    {
                        loader:'typings-for-css-modules-loader', //css-loader 版本为1.0才可以
                        options:{
                            modules:true,//是否使用css Moudle
                            namedExport:true, //是否类名导出
                            camelCase:true, //是否支持驼峰
                            sass:true, //是否使用sass 
                        }
                    },
                    {
                        loader:'cache-loader',
                        options:{
                            useCache:true,
                            cacheDirectory:path.join(__dirname,'./../','.cache-loader')
                        }
                    },
                    // 'css-loader',
                    {
                        loader:'sass-loader',
                        options:{
                            includePaths:[path.join(__dirname,'./../','src/styles')]
                        }
                    },
                    
                ]
            }
        ]
    }
}