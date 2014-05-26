var apiUrl = '/api';
var request = require('superagent');

exports = module.exports = function () {
    return {
        resource: require('./resource')(request, apiUrl+'/resource'),
    };
};