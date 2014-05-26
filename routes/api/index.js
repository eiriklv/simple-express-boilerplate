exports = module.exports = function (app, express, handlers, path) {
    app.use(path, require('./resource')(express, handlers, '/resource'));
};