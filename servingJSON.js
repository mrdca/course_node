var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var jsonObj = {
		name: 'david',
		age: 23,
		nick: 'mrdca'
	};
	res.end(JSON.stringify(jsonObj));
}).listen(5005);

console.log('The server is running on 127.0.0.1:5005 ');


