exports = module.exports = function (Resource) {
    return function (body, callback) {
        // here is where you would interact with a database model (resource)
        callback(null, body);
    };
};