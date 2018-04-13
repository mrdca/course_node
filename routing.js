var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	console.log('requested url: ' + req.url);
	if(req.url === 'home' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('index.html').pipe(res);
	} else if (req.url === '/api') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		var jsonObj = {
			name: 'david',
			age: 23,
			nick: 'mrdca'
		};
		res.end(JSON.stringify(jsonObj));
	} else if(req.url === '/about' ) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('about.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream('404.html').pipe(res);
	}
	
}).listen(5005);

console.log('The server is running on 127.0.0.1:5005 ');


