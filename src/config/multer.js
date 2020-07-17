const multer = require('multer')
const path = require('path')

const config = multer.diskStorage({

    filename: function(req,res,cb){

    },

    destination:function(req,res,cb){

        cb(null, path.resolve('uploads'))
    }

})

module.exports = multer.diskStorage({storage: config})