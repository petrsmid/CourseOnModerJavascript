"use strict";  //turn on strict mode and EcmaScript 6 features

let http = require("http");  //import node module "http"

http.createServer((request, response) => {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');