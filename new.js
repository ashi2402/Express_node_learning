var express = require('express');
var bodyParser = require('body-parser');
var newApp = express();

var port = 4000;

newApp.listen(4000);

newApp.set('view engine', 'ejs');

newRouter = express.Router();

newApp.use(bodyParser.json());
newApp.use(bodyParser.urlencoded({
    extended: true
}));

newApp.get('/about', function (req, res) {
    res.render("pages/about");
});
newApp.get('/contact', function (req, res) {
    res.render("pages/contact");
});

newApp.get('/', function (req, res) {
    var drinks = [
        {name: 'Coca Cola', drunkness: 1},
        {name: 'Pepsi', drunkness: 2},
        {name: '7up', drunkness: 1}
    ];
    var tagline = 'Any code of your own that you haven';

        res.render('pages/index', {
            drinks: drinks,
            tagline: tagline
        });
});

newApp.post('/sendData', function (req, res) {
    var person = {
        name: req.body.name,
        contact: req.body.contact,
        address: req.body.address
    };

    res.render('pages/dataReceive', person);
});
//about page

newApp.use('/', newRouter);



/*newApp.use(express.static('public'));

newRouter.get('/about', function (req, res) {
  //  res.send("This is about page")
//});
newRouter.get('/contact', function (req, res) {
    res.send("This is contact page")
});

newApp.use(newRouter);

newApp.get('/', function (req, res) {
    res.send("New port is running on 4000")
});*/