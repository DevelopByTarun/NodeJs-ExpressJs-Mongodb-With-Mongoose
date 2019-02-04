/*
 It contains functions for creating both servers and clients (called streams).
 The socket is the channel of the communication between any two programs (which can be on the same machine or distributed system). The socket contains a IP address and a port number (which should be unique, no two processes can use the same port on the same physical address space).
 The sockets can be written data to or read from.
 There are two categories of TCP socket programs you can write - i. server, ii. client. A TCP server listens for connections to it from clients and send data to the client. A TCP client connects to a TCP server exchange data with it.
 The communication between client and server happens via sockets.
 */
/*
 To enable Telnet command line utilities:
 Click Start > Control Panel.
 Click Programs and Features.
 Click Turn Windows features on or off.
 In the Windows Features dialog box, check the Telnet Client check box.
 Click OK. The system installs the appropriate files. This will take a few seconds to a minute.
 */
var net = require('net');

var server = net.createServer();
var port = 4001;
server.on('listening', function() {
    console.log('Server is listening on port', port);
});
server.on('connection', function(socket) {
    console.log('Server has a new connection');
    socket.end();
    server.close();
});
server.on('close', function() {
    console.log('Server is now closed');
});
server.on('error', function(err) {
    console.log('Error occurred:', err.message);
});
console.log("Going to Listen the Server");
server.listen(port);
