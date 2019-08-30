const path  = require('path')
exports.untils = (dir)=>{
    return path.join(__dirname,'./../',dir)
}
exports.resolveAssetsRootDir = function (dir){
    return path.join(dir)
}