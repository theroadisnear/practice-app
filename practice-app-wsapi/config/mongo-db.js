module.exports = function (mongoose) {
	var url = 'mongodb://localhost/test'

	mongoose.connect(url, function (err) {
		if (err) {
			console.log("Database connection failed " + url);
		} else {
			console.log("Database connection success " + url);
		}
	});
}