var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/', express.static(path.resolve(__dirname + '/../assets')));

router.get('/', function(req, res) {
	console.log('GET: /app/ - req.path = ', req.path);
	return res.sendFile(path.resolve(__dirname + '/../assets/templates/index.html'));
});

router.use('/', function (req, res, next) {
	console.log(req.path);
	//Unauthenticated users can only access home, login and register
	if( (req.path !== '/login' || req.path !== '/register' || req.path !== '/home') && (!req.session.token)) {
		return res.redirect('/');
	}

	//next();
});

module.exports = router