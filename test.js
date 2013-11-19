var http = require('http');

var request = http.request(
    {
        socketPath: '/tmp/loesung-regtable',
        auth: 'user:password',
    },
    function(response){
        console.log(response.headers);
        response.on('data', function(chunk){
            console.log(chunk.toString('ascii'));
        });
    }
);

request.on('error', function(e){
    console.log('ERR',e);
});

request.write('data');
request.end();
