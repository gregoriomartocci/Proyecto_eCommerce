const db = require(dbDir);

module.exports = { 
    getAllUser: function(req,res) {
        console.log('test')
      db.User.findAll()
      .then((result) => {
        console.log('test1' + result)
        res.json(result)
      })
      .catch((err) => {
        console.log('test2' + err);
        res.json({ error: true });
      });
    },
};
  