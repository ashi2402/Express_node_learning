var express = require('express');

var app = express();

var port = 5000;

var myRouter = express.Router();

app.use(express.static('public'));
//app.set('view','src/view');


myRouter.route('/about').
    get(function (req, res) {
        res.send('This is about page');
    });
myRouter.route('/contact').
get(function (req, res) {
    res.send('This is contact page');
});

app.use('/', myRouter);

//app.get('/', function (req, res) {
    //res.send("Hello World")
//});

app.listen(5000);

