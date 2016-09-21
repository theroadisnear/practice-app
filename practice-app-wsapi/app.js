var express = require('express');
var app =  express();
var router = express.Router();
var mongoose = require('mongoose');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser= require('body-parser');

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/chat', function (req, res ) {
	res.sendfile('./public/chat.html');
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json'}));

server.listen(3000, function () {
	console.log('Listening on port ' + 3000);
});

//Load database
require('./config/mongo-db')(mongoose);

//Load all models
var db = require('./dal/main')(mongoose);

app.use('/api/1', router);

//Load services
require('./services/auth')(app, router, db);
require('./services/user')(app, router, db);

//Load sockets
require('./websockets/chat')(app, io);