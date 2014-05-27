exports = module.exports = function (express, handlers, path) {
    var router = express();

    router.route('/page2')
        .get(handlers.page2);

    return router;
};