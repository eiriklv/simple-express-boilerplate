var Handlebars = require('hbsfy/runtime');
var helpers = require('../../../../common/helpers/handlebars')();

exports = module.exports = function () {
    return {
        helpers: require('./helpers')(Handlebars, helpers),
        partials: require('./partials')()
    };
};