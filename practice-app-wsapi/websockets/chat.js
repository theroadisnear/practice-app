module.exports = function (app, io) {

	io.on('connection', function (socket) { 
	console.log('user connected');
	socket.emit('news', { hello: 'world'});
	socket.on('disconnect', function () {
		console.log('user disconnected');
		});
	socket.on('chat message', function (msg) {
		console.log('message: ' + msg);
		io.emit('chat message', msg);
		});

	//Join room
	socket.on('joinRoom', function (room) {
		socket.join('some room', function (err) {
			if (err) {
				console.log('Joining room error: ' + err);
			}
			console.log('Joining room success');
		});
	});

	socket.on('leaveRoom', function (room) {
		socket.leave('some room', function (err) {
			if (err) {
				console.log('Leaving room error: ' + err);
			}
			console.log('Leaving room success');
		});
	});

	socket.on('private message', function (msg) {
		socket.broadcast.to('some room').emit('privateMessage', 'PM:' +msg);
	});
	});
}