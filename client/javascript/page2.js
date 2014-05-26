// dependencies
var io = require('socket.io-client');
require('./modules/handlebars')(); // register handlebars helpers and partials

// modules
var api = require('./modules/api')();
var templates = require('./templates')();
var sockets = require('./modules/page2/sockets')(io);

// application
var app = require('./modules/page2/main')(templates, api); // this could be the main app

console.log('page 2 client application started');