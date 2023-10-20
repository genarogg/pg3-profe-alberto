var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'genarogg', user: "genaro gonzalez", idC: '25 074 591', section: "nulo" });
});

module.exports = router;
