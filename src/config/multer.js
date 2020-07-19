const multer = require("multer");
const path = require("path");

const config = multer.diskStorage({
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}-${ext}`);
  },

  destination: function (req, file, cb) {
    cb(null, path.resolve('src','uploads','avatar'));
  },
});

module.exports = multer({ storage: config });
