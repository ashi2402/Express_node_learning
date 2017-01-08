var express = require('express');

var newApp = express();

var port = 4000;

newApp.listen(4000);

newApp.set('view engine', 'ejs');

newRouter = express.Router();

newRouter.param('name', function (req, res, next, name) {
    console.log('doing name validation on '+ name);
   req.name = name;
    next();
});
newRouter.get('/handler/:name', function (req, res) {
    res.send("Hello "+ req.name + '!');
});

newApp.get('/about', function (req, res) {
    res.render("pages/about");
});

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