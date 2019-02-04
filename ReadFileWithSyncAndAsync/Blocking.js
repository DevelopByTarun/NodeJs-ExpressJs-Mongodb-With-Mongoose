// Synchronous Style Read

var fs = require("fs");
var data = fs.readFileSync("Sample.txt");
console.log('File Data Is :: ' + data.toString());

var a = 100;
var b = 200;
var c = a + b;
console.log('Sun Of A And B Is :: ' + c);