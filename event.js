var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked', function(element) {
	console.info(element + ' have been clicked by me');
});

eventEmitter.emit('clicked', 'A button');


