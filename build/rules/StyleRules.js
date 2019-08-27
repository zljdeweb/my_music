const untils = require('./../untils')
const theme = require('./../../theme')
module.exports = [
    {
        test:/\.scss$/,
        include:[untils('src')],
        use:[
            'style-loader',
            // {
            //     loader:'cache-loader',
            //     options:{
            //         useCache:true,
            //         cacheDirectory:untils('.cache-loader')
            //     }
            // },
            {
                loader:'typings-for-css-modules-loader', //css-loader 版本为1.0才可以
                options:{
                    modules:true,//是否使用css Moudle
                    namedExport:true, //是否类名导出
                    camelCase:true, //是否支持驼峰
                    sass:true, //是否使用sass 
                }
            },
            // 'css-loader',
            {
                loader:'sass-loader',
                options:{
                    includePaths:[untils('src/styles')]
                }
            },
            
        ]
    },
    {
        test:/\.less$/,
        include:[untils('node_modules')],
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'less-loader',
                options:{
                    javascriptEnabled:true,
                    modifyVars:theme
                }
            },
            
        ]
    }
]