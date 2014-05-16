exports = module.exports = function (app, handlers) {
    app.route('/')
        .get(handlers.landing);

    app.route('/page1')
        .get(handlers.page1);

    app.route('/page2')
        .get(handlers.page2);

};