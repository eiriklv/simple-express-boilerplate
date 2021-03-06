// dependencies
var io = require('socket.io-client');
require('./modules/handlebars')(); // register handlebars helpers and partials

// config (envify)
var config = require('./config');

// modules
var api = require('./modules/api')(config);
var templates = require('./templates')();
var sockets = require('./modules/page2/sockets')(io);

// application
var app = require('./modules/page2/main')(templates, api); // this could be the main app

// debug
console.log('page 2 client application started');
console.log(config);