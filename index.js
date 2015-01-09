var fs = require('fs'),
    split_json = require('split-json'),
    through = require('through');

fs.createReadStream('var.json')
  .pipe(split_json())
  .on('data', function (obj) {
    console.log(split_json.JSONValid(obj));
    console.log(split_json.isObject(obj));
    console.log(obj.name);
  })
  .on('error', function (err) {
    console.log("error=" + err);
  });
