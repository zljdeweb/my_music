const untils = require('./../untils')
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = [
    {
        test:/\.ts(x?)$/,
        use:[{
            loader:'awesome-typescript-loader',
            options:{
                useCache:true,
                cacheDirectory:untils('.cache-loader'),
                getCustomTransformers:()=>({
                    before:[
                        tsImportPluginFactory({
                            libraryName:'antd',
                            libraryDirectory:'lib',
                            style:true
                        })
                    ]
                })
            }
        }]
    }
]