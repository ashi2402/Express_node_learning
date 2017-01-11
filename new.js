var express = require('express');
var bodyParser = require('body-parser');
var newApp = express();
var mongoose = require('mongoose');
var port = 4000;

newApp.listen(4000);

newApp.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/learning');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    contact : Number,
    address :String
});

var User = mongoose.model('User', userSchema);

var employeeDetails = new Schema({
    ID: Number,
    name: String,
    contact: Number,
    department: String
});

var EmployeeData = mongoose.model('EmployeeData', employeeDetails);



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


    var chris = new User({
        name: req.body.name,
        contact : req.body.contact,
        address :req.body.address,
        email : 'abc@gmail.com'
    });

    chris.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully!');
    });

    res.render('pages/dataReceive', chris);
});
//about page

newApp.use('/', newRouter);



