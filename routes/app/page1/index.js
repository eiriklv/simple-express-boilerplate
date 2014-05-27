exports = module.exports = function (express, handlers, path) {
    var router = express();

    router.route('/page1')
        .get(handlers.page1);

    return router;
};