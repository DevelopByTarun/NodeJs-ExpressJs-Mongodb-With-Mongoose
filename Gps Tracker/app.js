// const express = require("express");
// var socket = require("socket.io");
// const app = express();
// var server = app.listen(9090, () => {
//     console.log("server started");
// });
// app.use(express.static("public"));
// var io = socket(server);

const express = require("express");
var socket = require("socket.io");
const app = express();
var server = app.listen(1111, () => {
    console.log("Server Start....")
});

app.use(express.static("public"));
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/public/trackee.html");
});
// app.get('/admin', (request, response) => {
//     response.sendFile(__dirname + "/public/updatetrackee.html");
// });
var io = socket(server);
io.sockets.on('connection', function(socket) {
    console.log('connection :', socket.id);
    socket.emit('message', { message: 'welcome to the Track Me' + socket.id });
    socket.on('send', function(data) {
        console.log("Send Event Call", data);
        io.sockets.emit('adminmessage', data);
    });
});