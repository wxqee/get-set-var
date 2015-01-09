var fs = require('fs'),
    split_json = require('split-json'),
    through = require('through');

var gsv_db_name = process.env['GSV_DB_NAME'] || die('Environment GSV_DB_NAME is required.'),
    fileName = '/tmp/gsv-' + gsv_db_name + '-db.json',
    contentObj = {};

function die() {
  var message = '';
  if (arguments.length === 1) {
    message = arguments[0];
  }
  console.error(message);
  process.exit(1);
}

switch (process.argv.length) {
  case 4:
    vSet(process.argv[2], process.argv[3]);
    break;
  case 3:
    vGet(process.argv[2]);
    break;
}

function vSet(k, v) {
  fs.readFile(fileName, {encoding: 'utf-8'}, function (err, data) {
    if (err) throw err;
    contentObj = JSON.parse(data);
    contentObj[k] = v;
    fs.writeFile(fileName, JSON.stringify(contentObj), function (err) {
      if (err) throw err;
    });
  });
}

function vGet(k) {
  fs.readFile(fileName, {encoding: 'utf-8'}, function (err, data) {
    if (err) throw err;
    contentObj = JSON.parse(data);
    console.log(contentObj[k] || "");
  });
}
