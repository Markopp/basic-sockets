var socket = io();

socket.on('connection', function() {

});

socket.on('message', function(message) {
	console.log('message received: ' + message.text);
});


var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();
	var $message= $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});