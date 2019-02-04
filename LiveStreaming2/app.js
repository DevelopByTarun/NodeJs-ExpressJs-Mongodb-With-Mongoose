var fs = require("fs");
var readableStream = fs.createReadStream(__dirname + "/one.mp4");
var express = require("express");
var app = express();
app.use(express.static("Public"));
app.get("/showVideo", (request, response) => {
    response.writeHead(200, { "Content-Type": "video/mp4" });
    readableStream.pipe(response);
});
app.listen(8080, () => {
    console.log("server start....");
});