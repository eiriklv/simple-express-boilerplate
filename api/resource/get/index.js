exports = module.exports = function () {
    return function (query, callback) {
        callback(null, query);
    };
};