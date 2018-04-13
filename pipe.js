var fs = require('fs');
var http = require('http');

var readStream = fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file.txt');

readStream.pipe(writeStream);

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//res.end('Hello!!');
	var readStream = fs.createReadStream('file.txt', 'utf8');
	readStream.pipe(res);
}).listen(5005);

console.log('The server is running on 127.0.0.1:5005 ');


