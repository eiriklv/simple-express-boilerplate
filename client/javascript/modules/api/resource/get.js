exports = module.exports = function (request, path) {
    return function (query, callback) {
        request
            .get(path)
            .query(query)
            .end(function (error, res) {
                if (error) callback(error);
                if (res.status != 200) callback('unexpected response code: ' + res.status);
                if (!res.body) callback('no body');

                callback(null, res.body);
            });
    }
};
