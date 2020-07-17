module.exports = {

    create: function(req,res){
        res.render('avatar')
    },

    store: function(req,res){
        res.json(req.files)
    }

}