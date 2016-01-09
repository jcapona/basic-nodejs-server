var filtLsModular_module = require('./filtLsModular_module');
var dir = process.argv[2];
var ext = process.argv[3];

filtLsModular_module(dir, ext, function(err, files) {
  for (i = 0; i < files.length; i++)
    console.log(files[i]);
});

