/*
 * A registery server
 *
 * This server listens on a UNIX socket. It provides all other servers on
 * this system with access to global options.
 */
require('./lib/baum.js');
CONFIG = $.config.createConfig('./config/');

var socketPath = CONFIG.get('socket-path');

var IPCServer = $.ipc.createServer(socketPath);
console.log('IPC Server created at: ' + socketPath);

IPCServer.on('data', function(e){
    e.response.setHeader('content-type', 'text/html');
    e.response.writeHead(200);
    e.response.write('hello');
    e.end('Here is Regtable from Project Loesung.');
});

IPCServer.start();
