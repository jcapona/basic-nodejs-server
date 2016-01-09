/*
 ## JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  

*/

var http = require('http');

var page = [process.argv[2],process.argv[3],process.argv[4]];
var strPage = [];
var str0 = "";
var str1 = "";
var str2 = "";
var rdy0 = false;
var rdy1 = false;
var rdy2 = false;

http.get(page[0], function(resp){
  resp.setEncoding('utf8')  
  resp.on('data', function(data){
    str0 += data;
  });
  resp.on('error', function(e){
    console.log(e.message);
  });
  resp.on('end', function(data){
    rdy0 = true;
    print();
  });
});

http.get(page[1], function(resp){
  resp.setEncoding('utf8')  
  resp.on('data', function(data){
    str1 += data;
  });
  resp.on('error', function(e){
    console.log(e.message);
  });
  resp.on('end', function(data){
    rdy1 = true;
    print();
  });
});

http.get(page[2], function(resp){
  resp.setEncoding('utf8')  
  resp.on('data', function(data){
    str2 += data;
  });
  resp.on('error', function(e){
    console.log(e.message);
  });
  resp.on('end', function(data){
    rdy2 = true;
    print();
  });
});

function print()
{
    if(rdy0&&rdy1&&rdy2)
    {
        console.log(str0);
        console.log(str1);
        console.log(str2);
    }
}
