const untils = require('./../untils')
module.exports = [
    {
        test:/\.ts(x?)$/,
        use:[{
            loader:'awesome-typescript-loader',
            options:{
                useCache:true,
                cacheDirectory:untils('.cache-loader')
            }
        }]
    }
]