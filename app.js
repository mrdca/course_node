var http = require("http");

http.createServer(function (req, res) {
	var body = 'this is the body response';
	var content_length = body.length;
	res.writeHead(200, {
		'content-Type': 'text/plain',
		'content-Length': content_length
	});
	res.end(body);
}).listen(3039);

console.log('The server is running on http://127.0.0.1:3039/');
