var events = require('events');
var util = require('util');

var Students = function(name) {
	this.name = name;
}

util.inherits(Students, events.EventEmitter);

var noe = new Students('Noe');

noe.on('scored', function(marks) {
	console.log(noe.name + ' scores ' + marks + ' marks');
});


noe.emit('scored', 88);