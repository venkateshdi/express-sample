module.exports = function (app) {
    var db = require('nedb');
    var links = new db({ fileName: '/data/links.db', autoload: true });

    //get all links
    app.get('/api/links', function (req, res) {
        links.find({}, function (err, docs) {
            if (err) {
                return res.json(err);
            }
            else {
                if (!docs) {
                    return res.json('Links Index');
                }
                else {
                    return res.json(docs);
                }
            }
        });
    });
    
    //get link
    app.get('/api/link/:title', function( req, res) {
       links.find({title: req.body.title}, function(err, docs){
           if (err) {
                return res.json(err);
            }
            else {
                if (!docs) {
                    return res.json('Links Index');
                }
                else {
                    return res.json(docs);
                }
            }
       });
    });  

    app.post('/api/links', function (req, res) {
        if (req.body) {
            links.insert(req.body, function (err, docs) {
                if (err) {
                    return res.json(err);
                }
                else {
                    return res.json(docs);
                }
            });
            links.save();
        }
       
        //return res.json(req.body);
    });
    
    
};