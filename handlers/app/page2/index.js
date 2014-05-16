exports = module.exports = function (api) {
    return function(req, res){
        res.render('page2', {
            title: 'Page 2',
            itemList: ['one', 'two', 'three', 'four']
        });
    };
};