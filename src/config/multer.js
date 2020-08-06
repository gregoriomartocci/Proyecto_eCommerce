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

const imageFilter = function(req, file, cb) {
  
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Imagen solo JPEG/PNG';
      return cb(null, false)
  }
  return cb(null, true);
};

module.exports = multer({ storage: config , fileFilter: imageFilter });
