// create function
function add(x, y) {
    return parseInt(x) + parseInt(y);
}

// create module
var http = require("http");

// create server
http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end("Sum Of X And Y Is :: " + add(100, 400));
}).listen(8080);
console.log("Server Run At http://localhost:8080");