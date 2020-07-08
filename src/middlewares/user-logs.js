const fs = require('fs')

module.exports = function(req,res,next){

    fs.appendFileSync('./src/userLogs.txt', 'blablabla\n')
    next()

}