/*
 * A registery server
 *
 * This server listens on a UNIX socket. It provides all other servers on
 * this system with access to global options.
 */
require('./lib/baum.js');

var IPCServer = $.ipc.createServer('/tmp/loesung-regtable');
IPCServer.on('data', function(e){
    e.response.setHeader('content-type', 'text/html');
    e.response.writeHead(200);
    e.response.write('hello');
    e.end('Here is Regtable from Project Loesung.');
});

IPCServer.start();
