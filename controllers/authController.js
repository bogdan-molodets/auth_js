const fs = require('fs');
const controller = function(){}

controller.index = function(req, res, next) {
  res.render('login', { title: 'Log in' });
}

controller.login =  function(req,res,next){
		if (req.body.name === 'james' || req.body.pass === 'bond'){
			req.session.isLoggedIn = true;
			req.session.name = req.body.name;
			res.redirect(301, '/users');
		}else{
			res.redirect(301, '/auth');
		}
	}

controller.logout = function(req,res,next){
		if(req.session.isLoggedIn){
			req.session.destroy(function(err){
				res.redirect(301,'/auth');
			});
		}else{
			res.redirect(301, '/auth');
		}
	}
module.exports = controller;