// place your ajax api here (application specific)
exports = module.exports = function (app, express, handlers, path) {
    var router = express();

    router.route('/resource')
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);

    app.use(path, router);
};