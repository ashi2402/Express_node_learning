var express = require('express');

var newApp = express();

var port = 4000;

newApp.listen(4000);

newApp.set('view engine', 'ejs');

newRouter = express.Router();

newApp.get('/', function (req, res) {
    var drinks = [
        {name: 'Coca Cola', drunkness: 1},
        {name: 'Pepsi', drunkness: 2},
        {name: 'Thumsup', drunkness: 1}
    ];
    var tagline = 'Any code of your own that you haven';

        res.render('pages/index', {
            drinks: drinks,
            tagline: tagline
        });
});

//about page

newApp.use('/', newRouter);



