exports = module.exports = function (express, handlers, path) {
    var router = express();

    router.route(path)
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);

    return router;
};