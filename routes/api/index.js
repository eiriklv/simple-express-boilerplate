// place your ajax api here (application specific)
exports = module.exports = function (app, handlers) {
    app.route('/api/v1/resource')
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);
};