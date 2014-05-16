exports = module.exports = function () {
    return function (body, callback) {
        callback(null, body);
    };
};