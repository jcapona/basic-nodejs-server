/*
 ## HTTP COLLECT (Exercise 8 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  
*/

var http = require('http');

var page = process.argv[2];
var str = "";

http.get(page, function(resp){
  resp.setEncoding('utf8')  
  resp.on('data', function(data){
    str += data;
  });
  resp.on('error', function(e){
    console.log(e.message);
  });
  resp.on('end', function(data){
    console.log(str.length);
    console.log(str);
  });

});



