var file = process.argv[2];
var fs = require('fs');

var buff = fs.readFile(file, function doneReading(err, data) {
    var buff = data.toString();
    buff = buff.split("\n");
    console.log(buff.length-1);
  });

