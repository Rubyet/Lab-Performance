var express = require('express');
var userModel = require('./../models/employer-model');

var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var employer = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.validate(employer, function(status,type){
		
		if(status){
			res.cookie('username', req.body.uname);
			if(type)
			{
				res.redirect('/AHome');
			}
			else
			{
				res.redirect('/EHome');
			}
				
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;


