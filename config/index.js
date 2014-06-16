// throw error
function _throw(m) {
    throw m;
}

// dependencies
var util = require('util');
var convict = require('convict');
var debug = require('debug')('application:configuration');
var validator = require('validator');

// catch all errors with no handler
process.on('uncaughtException', function (err) {
    debug('Caught exception without specific handler: ' + util.inspect(err));
    debug(err.stack, 'error');
    process.exit(1);
});

// application config
var config = module.exports = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development'],
        default: 'development',
        env: 'NODE_ENV'
    },
    server: {
        port: {
            doc: 'The server port to bind.',
            format: 'port',
            default: 0,
            env: 'PORT'
        },
        secret: {
            doc: 'The application secret (for sessions).',
            format: function (val) {
                if (!validator.isLength(val, 10)) _throw(new Error('Application secret must be at least 10 characters'));
            },
            default: 'somesillysecret',
            env: 'APPSECRET'
        },
        api: {
            path: {
                doc: 'The client API url path (relative to host).',
                default: '/api',
                env: 'API_PATH'
            }
        }
    }
});

// print the environment for debugging
debug(util.inspect(process.env, { colors: true }));

// validate the config
config.validate();