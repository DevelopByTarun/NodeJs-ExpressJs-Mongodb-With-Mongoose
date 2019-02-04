
var net = require('net');
var sockets = [];

var svr = net.createServer(function(sock) {
    console.log('Connected: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.write('Hello ' + sock.remoteAddress + ':' + sock.remotePort + '\n');
    sockets.push(sock);

    sock.on('data', function(data) {  // client writes message
        if (data == 'exit\n') {
            console.log('exit command received: ' + sock.remoteAddress + ':' + sock.remotePort + '\n');
            sock.destroy();
            var idx = sockets.indexOf(sock);
            if (idx != -1) {
                delete sockets[idx];
            }
            return;
        }
        var len = sockets.length;
        for (var i = 0; i < len; i ++) { // broad cast
            if (sockets[i] != sock) {
                if (sockets[i]) {
                    sockets[i].write(sock.remoteAddress + ':' + sock.remotePort + ':' + data);
                }
            }
        }
    });

    sock.on('end', function() { // client disconnects
        console.log('Disconnected: ' + data + data.remoteAddress + ':' + data.remotePort + '\n');
        var idx = sockets.indexOf(sock);
        if (idx != -1) {
            delete sockets[idx];
        }
    });
});

var svraddr = 'localhost';
var svrport = 4001;

svr.listen(svrport, svraddr);
console.log('Server Created at ' + svraddr + ':' + svrport + '\n');