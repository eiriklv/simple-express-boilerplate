exports = module.exports = function (api) {
    return {
        landing: require('./landing')(),
        page1: require('./page1')(api),
        page2: require('./page2')(api)
    };
};