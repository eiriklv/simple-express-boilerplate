exports = module.exports = function (services) {
    return {
        landing: require('./landing')(),
        page1: require('./page1')(services),
        page2: require('./page2')(services)
    };
};