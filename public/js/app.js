var socket = io();

socket.on('connection', function () {
	
});

socket.on('message', function (message) {
	console.log('message received: ' +message.text );
});