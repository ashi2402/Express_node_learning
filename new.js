var express = require('express');
var bodyParser = require('body-parser');
var newApp = express();
var mongoose = require('mongoose');
var port = 4000;

newApp.listen(4000);

newApp.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://10.7.0.3:27107/data/learning');
mongoose.connect('mongodb://localhost/learning');

var Schema = mongoose.Schema;


// create a schema
/*var userSchema = new Schema({
    name: String,
    contact : Number,
    address :String
});

userSchema.methods.salary = function (value) {
  this.value = value;
};

var User = mongoose.model('User', userSchema);*/

var employeeDetails = new Schema({
    empnumber: Number,
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

newApp.get('/dataReceive', function (req, res) {
    EmployeeData.find({name: 'ashish1', empnumber:566}, function(err, users) {
        if (err) throw err;


    res.render('pages/DataResult', {XYZ:users});
});});
/*newApp.post('/sendData', function (req, res) {


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
});*/

newApp.post('/employeeData', function (req, res) {
   var employee = new EmployeeData({
       empnumber: req.body.empnumber,
       name: req.body.name,
       contact: req.body.contact,
       department: req.body.department
   });

    employee.save(function (err) {
        if(err) throw err;
        console.log('Employee Details submit successfully');
    });
    res.render('pages/dataReceive', employee);
});
//about page

newApp.use('/', newRouter);



