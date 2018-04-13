var express = require('express');

var app = express();

//I am using ejs: http://www.embeddedjs.com/
//npm install ejs --save
//I created the view folder

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.get('/home', function(req, res) {
	res.send('This is the home page');
});

app.get('/about', function(req, res) {
	res.send('This is the about page');
});

var users = {
	1: {
		name: 'David',
		age: '23',
		job: 'web dev',
		company: 'ibm',
		leng: ['java', 'sql', 'c']
	},
	2: {
		name: 'Jose',
		age: '25',
		job: 'tester',
		company: 'oracle',
		leng: ['python', 'sql', 'c++']
	},
	3: {
		name: 'Miguel',
		age: '21',
		job: 'software dev',
		company: 'google',
		leng: ['javascript', 'sql', 'c#']
	}
};

app.get('/user/:id', function(req, res) {
	res.render('users', { name: users[req.params.id].name, id: req.params.id, job: users[req.params.id].job, 
						  company: users[req.params.id].company, leng: users[req.params.id].leng }); //Need vuew and an object as arguments
	//res.send('You have resquested the user with the id: ' + users[req.params.id]);
});


app.listen(5006, function() {
	console.log('The server is listening the port 5006');
});