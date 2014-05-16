exports = module.exports = function (app, handlers) {
    require('./app')(app, handlers.app);
    require('./api')(app, handlers.api);
};