var http = require('http');

var page = process.argv[2];
var str = "";

http.get(page, function(resp){
  resp.setEncoding('utf8')  

  resp.on('data', function(data){
    console.log(data);
  });
  resp.on('error', function(e){
    console.log(e.message);
  });
});



