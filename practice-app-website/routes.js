module.exports = function (app, router) {

	app.get('/', function(req, res) {
		console.log('GET: /');
		res.sendFile(__dirname + '/assets/templates/index.html');
	});
}