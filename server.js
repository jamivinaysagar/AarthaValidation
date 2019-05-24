//'use strict';
// var http = require('http');
// var path = require('path');
var express = require('express');
// var session = require('express-session');

var app = express();

require('../webpack.dev')(app);
//path
var pathToApp = __dirname;

app.use('/static', express.static(pathToApp + '/public'));

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
