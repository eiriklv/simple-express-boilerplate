exports = module.exports = function (request, path) {
    return function (body, callback) {
        request
            .post(path)
            .send(query)
            .end(function (error, res) {
                if (error) callback(error);
                if (res.status != 201) callback('unexpected response code: ' + res.status);
                if (!res.body) callback('no body');

                callback(null, res.body);
            });
    }
};
