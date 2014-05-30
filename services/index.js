exports = module.exports = function (models) {
    return {
        resource: require('./resource')(models.Resource)
    };
};