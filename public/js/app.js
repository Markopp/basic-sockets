var socket = io();

socket.on('connection', function () {
	console.log('Connected to socket');	
});