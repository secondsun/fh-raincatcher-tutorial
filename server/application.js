
'use strict';

var path = require('path');
var express = require('express');
var app = express();
var cors = require('cors');
var mbaasApi = require('fh-mbaas-api');
var mbaasExpress = mbaasApi.mbaasExpress();
var mediator = require('fh-wfm-mediator/lib/mediator');
var bodyParser = require('body-parser');
var config = require('./config');

var authServiceGuid = process.env.WFM_AUTH_GUID;
var securableEndpoints = [];

app.set('port', config.get('PORT'));
app.set('base url', config.get('IP'));

// Enable CORS for all requests
app.use(cors());

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// fhlint-begin: custom-routes

// app specific router
var router = express.Router();

app.use('/sys/info/ping', function(req, res) {
  res.send('ok.');
});
app.use('/api', bodyParser.json({limit: '10mb'}));
app.use('/box', bodyParser.json());
app.use('/api', router);
app.post('/cloud/:datasetId', function(req, res) {
  res.send('ok');
});

app.use('/', express.static(path.join(__dirname)));

app.listen(3001, function () {
})