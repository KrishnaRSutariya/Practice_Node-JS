var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');
const { log } = require('console');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },

  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', upload.single('multi-files'), (req, res) => {
  console.log(req.file);
  res.redirect('/');
});

module.exports = router;
