var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var session = require('express-session');
var port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(bodyParser.json());
app.use(session({ secret: "Q8hGuy&9&_128APIV@bD", resave: false, saveUninitialized: true }));

app.use('/app', require('./controllers/app-controller'));

//default route
app.get('/', function (req, res) {
	console.log('GET: /');
	return res.redirect('/app');
});

server.listen(port, function() {
	console.log('Listening on port ', port);
});


//require('./routes')(app, router);

