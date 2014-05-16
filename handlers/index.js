exports = module.exports = function (routines) {
    return {
        app: require('./app')(routines),
        api: require('./api')(routines)
    };
};