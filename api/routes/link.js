module.exports = function(app) {
    app.get('/api/links', function(req, res){
       res.json('Links Index'); 
    });
};