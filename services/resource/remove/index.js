exports = module.exports = function (resource) {
    return function (body, callback) {
        // here is where you would interact with a database model (resource)
        callback(null, body);
    };
};