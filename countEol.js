var file = process.argv[2];
var fs = require('fs');
var buff = fs.readFileSync(file).toString();
buff = buff.split("\n");
console.log(buff.length-1);

