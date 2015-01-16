'use strict'

//We will be using inbuilt http library in nodejs
//Here we have used http library and stored reference of http into http variable
var http = require('http');

var server = http.createServer(function(request, response){
	//We are defining MIME type that is being send to client - status code and headers are sent to client
	response.writeHead(200, {"Content-type":"text/plain"});
	//Telling the server the response is being successful
	response.end('Hello World');
});

server.listen(9000);
