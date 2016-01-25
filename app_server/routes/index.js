var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); // require main controllers file
// var homepageController = function (req, res, next) {
// 	res.render('index', { title: 'Express' });
// };

/* GET home page. */
router.get('/', ctrlMain.index); // reference index method of controllers in route definition

module.exports = router;
