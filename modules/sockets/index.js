// handle socket io
exports = module.exports = function (io, ipc) {
    // global socket.io (global namespace)
    require('./global')(io, ipc);

    // session socket.io (page1 namespace)
    require('./global-page1')(io, ipc);

    // session socket.io (page2 namespace)
    require('./global-page2')(io, ipc);
};