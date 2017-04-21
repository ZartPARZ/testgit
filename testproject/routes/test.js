/**
 * Created by ZartPARZ on 2017-04-21.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	res.render('index',{title: "test web"});
});
router.get('/test', function(req, res, next) {
	res.render('index',{title: "test"});
});

module.exports = router;
