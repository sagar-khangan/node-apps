/**
 * Created by Sagar Khangan on 11-08-2016.
 */

var http = require('http');
var fs= require('fs');

//404 response
function send404(response) {
    response.writeHead(404,{"Content-Type":"text/plain"})
    response.write("Error 404 , File not found");
    response.end();
}

function onRequest(request,response) {
    console.log("User request"+ request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("This is response");
    response.end();
}

function fileServer(request,response) {
    if(request.method == 'GET' && request.url== '/'){
        response.writeHead(200,{"Context-Type":"text/html"});
        fs.createReadStream('./index.html').pipe(response);
    }
    else{
        send404(response)
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server Up.....");

http.createServer(fileServer).listen(8000);

