var fs = require('fs');

var read_string = fs.readFileSync('file.txt', 'utf8', function (err, data) {
	if(err) {
		console.error(err);
	} else {
		console.info(data);
	}
	
});

console.log(read_string);

fs.writeFileSync('file2.txt', read_string); //create a file with the content of read_string (file.txt)n

//fs.unlink('file2.txt');  // Asynchronously remove files

//fs.mkdirSync('simple-folder');

fs.mkdir('simple-folder', function() {
	fs.writeFile('./simple-folder/mynode.txt', 'it is a string');
});

// fs.rmdir('simple-folder');