exports = module.exports = function (app, express, handlers, path) {
    var router = express();

    router.route('/')
        .get(handlers.landing);

    router.route('/page1')
        .get(handlers.page1);

    router.route('/page2')
        .get(handlers.page2);

    app.use(path, router);
};