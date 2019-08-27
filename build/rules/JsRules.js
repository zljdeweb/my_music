const tsImportPluginFactory = require('ts-import-plugin')
const untils = require('./../untils')
module.exports = [
    {
        test:/\.ts(x?)$/,
        use:[
                {
                loader:'awesome-typescript-loader',
                options:{
                    useCache:true,
                    cacheDirectory:untils('.cache-loader'),
                    getCustomTransformers:()=>({
                        before:[
                            tsImportPluginFactory({
                                libraryName:'antd',
                                libraryDirectory:'lib',
                                style:true,
                                
                            })
                        ]
                    }),
                    target: "es2016",
                    module: "ESNext",
                    // compilerOptions: {
                    //     module: 'es2016',
                    //     sourceMap: true
                    // }
                }
            }
        ]
    }
]