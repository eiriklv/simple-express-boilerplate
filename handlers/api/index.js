exports = module.exports = function (routines) {
    return {
        resource: require('./resource')(routines.resource)
    };
};