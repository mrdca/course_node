var hello = require('./export.js');  //I just import one function
console.log(hello.sayHello());



var importData = require('./exports'); //By this way I import some functions
console.log(importData.myFirstFunction());
console.log(importData.mySecondFunction());


