exports = module.exports = function () {
    return {
        get: require('./get')(),
        remove: require('./remove')(),
        create: require('./create')(),
        edit: require('./edit')()
    };
};