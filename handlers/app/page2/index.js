exports = module.exports = function (services) {
    return function(req, res){
        res.render('page2', {
            title: 'Page 2',
            itemList: ['one', 'two', 'three', 'four']
        });
    };
};