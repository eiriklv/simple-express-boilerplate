exports = module.exports = function (app, express, handlers) {
    require('./app')(app, express, handlers.app, '/');
    require('./api')(app, express, handlers.api, '/api');
};