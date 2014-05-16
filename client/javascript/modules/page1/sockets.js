exports = module.exports = function (io) {
    var socket = io.connect('/page1');

    socket.on('connect', function () {
        console.log('connected to socket.io');
    });

    // initialize procedure to ensure that connection is established
    socket.on('init', function (data) {
        console.log('socket.io initialized for page1..');
        socket.emit('init', 'response: ' + data);
    });

    socket.on('message', function (data) {
        console.log('got message: ' + data);
    });

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });
};