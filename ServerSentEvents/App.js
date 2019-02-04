var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.static("Public"));
app.get("/Stream", (request, res) => {
    console.log("Server Call");
    res.writeHead(200, {
        'content-type': 'text/event-stream',
        'connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });
    fs.watchFile(__dirname + '/Public/Index.html', function() {
        res.write('event: fileChange\n');
        res.write('data: Index.html changed at ' + new Date().toString() + '\n\n');
    });
    setInterval(function() {
        console.log("Set Interval Call");
        res.write('event: message\n');
        res.write('message: ' + new Date().toString() + '\n\n');
    }, 3000);
});
app.listen(8080, () => {
    console.log("Server Start....");
});