var fs = require('fs'),
    split_json = require('split-json'),
    through = require('through');

var gsv_db_name = process.env['GSV_DB_NAME'] || die('Environment GSV_DB_NAME is required.'),
    fileName = '/tmp/gsv-' + gsv_db_name + '-db.json';

function die() {
  var message = '';
  if (arguments.length === 1) {
    message = arguments[0];
  }
  console.error(message);
  process.exit(1);
}

fs.exists(fileName, function (exists) {
  !exists || die(fileName + " exists.");
  fs.writeFile(fileName, "{}", function (err) {
    if (err) throw err;
    console.log(fileName + " has been inited for GSV_DB_NAME=>" + gsv_db_name);
  });
});

