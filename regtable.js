/*
 * A registery server
 *
 * This server listens on a UNIX socket. It provides all other servers on
 * this system with access to global options.
 */
var http = require('http');
var server = http.createServer(function(request, response){
    console.log(request);
    response.end('hi');
});

server.listen('/home/lucifer/testSocket');
