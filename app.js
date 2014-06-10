// dependencies
var http = require('http');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var socketio = require('socket.io');
var app = express();

// config and setup helpers
var common = require('./common')();
var config = require('./config');
var setup = require('./setup');
var helpers = common.helpers;

// setup handlebars
setup.registerPartials('./views/partials/', hbs); // register handlebars partials
setup.registerHelpers(helpers.handlebars, hbs); // register handlebars block helpers

// setup express
setup.configureExpress({
    express: express,
    handlebars: hbs,
    session: session,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http and socket.io server
var server = http.createServer(app); // http
var io = socketio.listen(server); // socket.io

// include app specific modules
var models = require('./models')();
var ipc = require('./modules/ipc')(0);
var services = require('./services')(models);
var handlers = require('./handlers')(services);

// initialize app
require('./modules/sockets')(io, ipc);
require('./routes')(app, express, handlers, config);

// run server
setup.run(server, config);
