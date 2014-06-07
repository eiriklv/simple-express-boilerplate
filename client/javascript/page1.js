// dependencies
var io = require('socket.io-client');
require('./modules/handlebars')(); // register handlebars helpers and partials

// config (envify)
var config = require('./config');

// modules
var api = require('./modules/api')(config);
var views = require('./views')();
var sockets = require('./modules/page1/sockets')(io);

// application
var app = require('./modules/page1/main')(views, api); // this could be the main app

// debug
console.log('page 1 client application started');
console.log(config);