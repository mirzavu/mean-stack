var express = require('express');
var router = express.Router();

	
router.get('/', function(req, res, next){
	console.log('dfdf')
	res.render('index.html');
});

module.exports = router;