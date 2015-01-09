#!/usr/bin/env node

var fs = require('fs'),
    die = require('./die'),
    config = require('./package.json');

var gsv_db_name = process.env['GSV_DB_NAME'] || die('Environment GSV_DB_NAME is required.'),
    fileName = '/tmp/gsv-' + gsv_db_name + '-db.json',
    contentObj = {};

switch (process.argv.length) {
  case 4:
    vSet(process.argv[2], process.argv[3]);
    break;
  case 3:
    vGet(process.argv[2]);
    break;
  default:
    help();
    break;
}

function help() {
  var message = 'Usage: \n';
  message += '  $ ' + config.name + ' <variable-to-get>\n';
  message += '  $ ' + config.name + ' <variable-to-set> <value>\n';
  console.log(message);
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
