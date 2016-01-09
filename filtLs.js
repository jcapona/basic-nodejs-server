var dir = process.argv[2];
var ext = process.argv[3];
var fs = require('fs');
var path = require('path');

var buff = fs.readdir(dir, function doneReading(err, list) {
    for(var i=0; i<list.length; i++)
        if(path.extname(list[i].toString())=="."+ext)
            console.log(list[i].toString());
  });

