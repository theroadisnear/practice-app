module.exports = function (app, router ,db) {

	var User = db.user;

	//authenticate a user
	router.post('/authenticate', function (req, res) {
		console.log('Authenticating: ' + req.body.username)
		User.findOne({ username: req.body.username}, function (err, user) {
			if (err) {
				console.log('Error: ' + err);
				res.json({ message: err});
			}

			if (user) {
				if (user.password == req.body.password) {
					res.json({ message: 'Success'});
				} else {
					res.json({ message: 'Wrong password!'});
				}
			} else {
				res.json({ message: 'User not found!'});
			}
			
		});
	});
}