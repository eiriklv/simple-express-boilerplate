exports = module.exports = function (express, handlers, path) {
    var router = express();

    router.route('/')
        .get(handlers.landing);

    return router;
};