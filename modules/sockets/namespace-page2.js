var debug = require('debug')('application:socketio:global-page2');

exports = module.exports = function (io, ipc) {
    io.of('/page2').on('connection', function (socket) {
        debug('global socket connected to namespace page2');

        socket.on('init', function (data) {
            debug('socket.io initialized with: ' + data);
        });

        socket.on('disconnect', function () {
            debug('global socket disconnected from namespace page2');
        });

        socket.emit('init', 'initalize page 2');
    });
};