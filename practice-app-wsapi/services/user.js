module.exports = function(app, router, db) {

	var User = db.user;
	var mongoose = require('mongoose');

	//Get all users
	router.get('/user', function(req, res) {
		console.log('/user');
		User.find( function (err, users) {
			if (err) {
				res.json({ message: "Error getting users"});
			}
			res.json({ message: "Success", users: users});
		});
	});

	//Seeds
	router.post('/user/seed', function(req, res) {
		console.log('/user/seed');

		var newUser = new User();
		newUser._id = mongoose.Types.ObjectId();
		newUser.username = "Theroadisnear";
		newUser.password = "123456";
		newUser.name.first = "rodner";
		newUser.name.middle = "YU";
		newUser.name.last = "raymundO";

		newUser.save(function (err) {
			var message;
			if (err) {
				message = 'Error saving new user: ' + err;
				console.log(message);
				res.json({ message: message});
			} else {
				message = 'Successfully created new user:' + newUser;
				console.log(message);
				res.json({ message: message});
			}
		});
	});

}