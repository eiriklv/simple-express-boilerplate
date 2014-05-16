// dependencies
var io = require('socket.io-browserify');
require('./modules/handlebars')(); // register handlebars helpers and partials

// modules
var api = require('./modules/api')();
var templates = require('./templates')();
var sockets = require('./modules/page1/sockets')(io);

// application
var app = require('./modules/page1/main')(templates, api); // this could be the main app

console.log('page 1 client application started');