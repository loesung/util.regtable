var http = require('http');

var request = http.request(
    {
        socketPath: '/home/lucifer/testSocket',
        auth: 'user:password',
    },
    function(response){
        response.on('data', function(chunk){
            console.log(chunk);
        });
    }
);

request.on('error', function(e){
    console.log('ERR',e);
});

request.write('data');
request.end();
