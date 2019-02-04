// import modules
const impMod = require("../Module/Modules");

// create server and publish own modules locally on server
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("Sum Of Num1 And Num2 Is :: " + impMod.myCalculate.plus());
    response.write("<br/>");
    response.write("Subtract Of Num1 And Num2 Is :: " + impMod.myCalculate.minus());
    response.write("<br/>");
    response.write("Multiply Of Num1 And Num2 Is :: " + impMod.myCalculate.multiply());
    response.write("<br/>");
    response.write("Divide Of Num1 And Num2 Is :: " + impMod.myCalculate.divide());
    response.write("<br/>");
    response.end(request.url);
    response.end();
}).listen(8080);
console.log("Goto http://localhost:8080");