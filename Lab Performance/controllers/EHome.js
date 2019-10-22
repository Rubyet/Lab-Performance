var express = require('express');
var db = require('./../models/db.js');
var router = express.Router();

router.get('/', function(req, res){

		var sql = "select * from employer";
		db.getResults(sql, function(results){
			//if(req.cookies['uname'] != null){
				res.render('EHome/index', {employer: results});
			//}else{
			//	res.redirect('/login');
			//}
		});
});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


