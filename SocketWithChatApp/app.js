var express = require("express");
var chalk = require("chalk");
var socket = require("socket.io");
var app = express();


app.use(express.static("public"));
var server = app.listen(9000, function() {
    console.log("Server Start....");
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/public/chat.html");
});

var io = socket(server);
io.sockets.on('connection', function(socket) {
    console.log('connection :', socket.request.connection._peername);
    socket.emit('message', {
        message: 'welcome to the chat' + socket.id
    });
    socket.on('send', function(data) {

        io.sockets.emit('message', data);
    });
});