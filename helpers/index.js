exports = module.exports = function () {
    return {
        handlebars: require('./handlebars')(),
        common: require('./common')()
    };
};