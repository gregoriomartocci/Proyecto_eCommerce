const footer = require('../data/footer.json')

module.exports = (req,res,next) => {  
    res.locals.footer = footer  
    next()
}