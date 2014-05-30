exports = module.exports = function (io, ipc) {
    require('./global')(io, ipc);
    require('./namespace-page1')(io, ipc);
    require('./namespace-page2')(io, ipc);
};