const express = require('express');
var app = express();

var fs = require('fs')
var content = fs.readFileSync('report.json', 'utf8');
var data = JSON.parse(content)
console.log(data[0]);