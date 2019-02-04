var http = require("http");

//var fs = require("fs");
//
//http.createServer(function (request, response) {
//    fs.readFile("Sample.txt", (err, data) => {
//        response.writeHead(200, {
//            "Content-Type": "text/html"
//        });
//        if (!err) {
//            response.write(data.toString());
//        } else {
//            response.write("File Data Is Not Found");
//        }
//        response.end();
//    });
//}).listen(8080);
//console.log("Goto To http://localhost:8080");


var fs = require("fs");

http.createServer(function (request, response) {
    fs.readFile(new Buffer('Sample.txt'), (err, data) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (!err) {
            response.write(data.toString());
        } else {
            response.write("File Data Is Not Found");
        }
        response.end();
    });
}).listen(8080);
console.log("Goto To http://localhost:8080");