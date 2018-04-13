var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var readStream = fs.createReadStream('index.html', 'utf8');
	readStream.pipe(res);
}).listen(5005);

console.log('The server is running on 127.0.0.1:5005 ');


