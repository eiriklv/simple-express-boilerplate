var debug = require('debug')('application:socketio:global-page2');

exports = module.exports = function (io, ipc) {
    io.of('/page2').on('connection', function(socket){
        debug('global socket connected to namespace page2');

        // on disconnect
        socket.on('disconnect', function(){
            debug('global socket disconnected from namespace page2');
        });
    });
};