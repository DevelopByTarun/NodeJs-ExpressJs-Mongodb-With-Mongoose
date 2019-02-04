// Asynchronous Style Read

var fs = require("fs");
fs.readFile("Sample.txt", (err, data) => {
    if (!err) {
        console.log('File Data Is :: ' + data.toString());
    } else {
        console.log('File Data Is Not Found');
    }
});

var a = 100;
var b = 200;
var c = a + b;
console.log('Sun Of A And B Is :: ' + c);