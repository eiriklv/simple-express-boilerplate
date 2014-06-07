exports = module.exports = function (api, container) {
    //namespace
    var app = {};

    //model
    app.PageList = function() {
        return [
            {
                url: 'http://google.com',
                title: 'Google'
            },
            {
                url: 'http://bing.com',
                title: 'Bing'
            }
        ];
    };

    //controller (this is wehere all the logic goes)
    app.controller = function() {
        this.pages = app.PageList();
        
        this.rotate = function() {
            this.pages.push(this.pages.shift())
        }.bind(this)

        this.remove = function() {
            this.pages.shift()
        }.bind(this)
    };

    //view (here is where you add your elements and bind to events which you delegate to controller logic)
    app.view = function(ctrl) {
        return [
            ctrl.pages.map(function(page) {
                return m("a", {href: page.url, onmouseover: ctrl.remove}, page.title);
            }),
            m("a", {onclick: ctrl.rotate}, "Rotate links")
        ];
    };

    //initialize (here is where you append your app to the DOM)
    m.module(document.getElementById(container), app);
}