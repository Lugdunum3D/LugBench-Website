'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');
var server = express();

var api = require('./index.js');

mongoose.connect(config.mongodb_uri, (err) => {
  console.log(err || ("Successfully connected to the db"));

  server.use(express.static(__dirname));
  server.use(bodyparser.json());
  server.use('/api/:version', api);

  server.get('/', (req, res) => {
    res.sendFile('./index.html');
  });

  server.listen(config.server.port, (err) => {
    console.log(err || ('API is listening on port ' + config.server.port));
  });
});
