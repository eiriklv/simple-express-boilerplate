exports = module.exports = function (app, express, handlers, path) {
    app.use(path, require('./landing')(express, handlers, '/'));
    app.use(path, require('./page1')(express, handlers, '/page1'));
    app.use(path, require('./page2')(express, handlers, '/page2'));
};