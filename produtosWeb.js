var http = require('http');
var porta = 3000;
var ip = "localhost";

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var msgToShow;
    if(request.url == '/produtos')
        msgToShow = "Listing the store's products";
    else
        msgToShow = "Home of our page!";
    
    response.end(`<html><body>${msgToShow}</body></html>`);
}).listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");