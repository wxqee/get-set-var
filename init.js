#!/usr/bin/env node

var fs = require('fs'),
    die = require('./die');

var gsv_db_name = process.env['GSV_DB_NAME'] || die('Environment GSV_DB_NAME is required.'),
    fileName = '/tmp/gsv-' + gsv_db_name + '-db.json';

fs.exists(fileName, function (exists) {
  !exists || die(fileName + " exists.");
  fs.writeFile(fileName, "{}", function (err) {
    if (err) throw err;
    console.log(fileName + " has been inited for GSV_DB_NAME=>" + gsv_db_name);
  });
});

