exports = module.exports = function (services) {
    return function(req, res){
        res.render('page1', {
            title: 'Page 1',
            itemList: ['five', 'six', 'seven', 'eight']
        });
    };
};