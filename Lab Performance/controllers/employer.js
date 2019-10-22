var express = require('express');
var userModel = require('./../models/employer-model');
var router = express.Router();

/*router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});*/

router.get('/userlist', function(req, res){

		userModel.getAll(function(results){
			if(req.cookies['username'] != null){
				res.render('employer/index', {employer: results});
			}else{
				res.redirect('/login');
			}
		});
});


router.get('/adduser', function(req, res){
	res.render('employer/adduser');
});

router.post('/adduser', function(req, res){

	var employer = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.insert(employer, function(status){
		if(status){
			res.redirect('/employer/userlist');
		}else{
			res.redirect('/employer/adduser');
		}
	});
});

router.get('/edit/:id', function(req, res){

	userModel.getById(req.params.id, function(results){
		res.render('employer/edit', {employer: results[0]});		
	});

});

router.post('/edit/:id', function(req, res){
	
	var employer = {
		username: req.body.username,
		password: req.body.password,
		id: req.params.id
	};

	userModel.update(employer, function(status){

		if(status){
			res.redirect('/employer/userlist');
		}else{
			res.redirect('/employer/adduser');
		}
	});
});

router.get('/details/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		console.log(result);
		res.render('employer/details', {employer: result});
	});
});

module.exports = router;
