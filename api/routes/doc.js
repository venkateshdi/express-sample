module.exports = function (app) {
    app.get('/api/docs', function (req, res) {
        var routes = [];
        app._router.stack.forEach(function (r) {
            if (r.route && r.route.path) {
                console.log(r.route.path);
                routes.push(r.route.path);
            }
        });

        res.json({ title: app.locals.title, routes: JSON.stringify(routes) });
    });
};