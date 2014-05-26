exports = module.exports = function (templates, api) {
    api.resource.get(null, function (err, resources) {
        console.log(resources);
    });

    $('#main').append(templates.common.spinner());
};