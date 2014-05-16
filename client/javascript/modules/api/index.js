var apiUrl = '/api/v1';
var request = require('superagent');

exports = module.exports = function () {
    return {
        resource: require('./resource')(request, apiUrl+'/resource'),
    };
};