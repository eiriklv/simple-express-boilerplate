var debug = require('debug')('application:socketio:global-page1');

exports = module.exports = function (io, ipc) {
    io.of('/page1').on('connection', function (socket) {
        debug('global socket connected to namespace page1');

        socket.on('init', function (data) {
            debug('socket.io initialized with: ' + data);
        });

        socket.on('disconnect', function () {
            debug('global socket disconnected from namespace page1');
        });

        socket.emit('init', 'initalize page 1');
    });
};