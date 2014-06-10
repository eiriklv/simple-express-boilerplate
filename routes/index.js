exports = module.exports = function (app, express, handlers, config) {
    require('./app')(app, express, handlers.app, '/');
    require('./api')(app, express, handlers.api, config.get('server.api.path'));
};