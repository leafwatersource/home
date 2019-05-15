let http = require('http');
// let bodyParser = require('body-parser');
// server.use(bodyParser.json());
http.createServer(function (request, response) {
    // const buf = Buffer.from('runoob', 'ascii');1
    let msg = '{"name":"leafWaterSource","age":"22"}';
    var data = "";
    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8", "Access-Control-Allow-Origin": "*"});
   request.on('data',function (chunk) {
      data+=chunk ;

   });
   response.write(data);
    response.end(msg);
}).listen('8080');

console.log('http://localhost:8080');