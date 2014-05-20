// dependencies
var http = require('http');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var handlebars = require('handlebars');
var socketio = require('socket.io');
var app = express();

// config and setup helpers
var common = require('./common')();
var config = require('./config');
var setup = require('./setup');
var helpers = common.helpers;

// setup application
setup.registerPartials('./views/partials/', handlebars); // register handlebars partials
setup.registerHelpers(helpers.handlebars, handlebars); // register handlebars block helpers

// configure express
setup.configureExpress({
    express: express,
    session: session,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http and socket.io server
var server = http.createServer(app); // http
var io = socketio.listen(server); // socket.io

// app dependencies (app specific)
var ipc = require('./modules/ipc')(0);
var services = require('./services')();
var handlers = require('./handlers')(services);

// app specific modules
require('./modules/sockets')(io, ipc);
require('./routes')(app, handlers);

// run application
setup.run(server, config);
