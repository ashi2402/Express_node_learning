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

var employeeDetails = new Schema({
    empnumber: {type: Number, unique: true },
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

newApp.get('/contact', function (req, res) {
    res.redirect('/contact')
});

newApp.get('/dataReceive', function (req, res) {
    EmployeeData.find({}, function(err, users) {
        if (err) throw err;

        res.render('pages/DataResult', {XYZ:users});
});
});

newApp.get('/personDetails/:empID', function (req, res) {
    var personId = req.params.empID;
    EmployeeData.find({empnumber:personId}, function (err, users) {
        if(err) throw err;

        res.render('pages/personDetails', {user :users})
    })
});

newApp.get('/EditForm/:empID', function (req, res) {
    var personaldetail = req.params.empID;
    EmployeeData.find({empnumber: personaldetail}, function (err, details) {
        if(err) throw err;

        res.render('pages/EditForm', {detail: details})
    })
});

newApp.post('/updateData', function (req, res) {
    var personId = req.body.empnumber;
    EmployeeData.findOne({empnumber: personId}, function (err, updateUser) {
        updateUser.name = req.body.name;
        updateUser.contact  = req.body.contact;
        updateUser.department = req.body.department;

        updateUser.save(function (err, data) {
            if(err) throw err;
            res.redirect('/dataReceive')
        })

    });

    });


newApp.post('/employeeData', function (req, res) {
   var employee = new EmployeeData({
       empnumber: req.body.empnumber,
       name: req.body.name,
       contact: req.body.contact,
       department: req.body.department
   });

    employee.save(function (err) {
        if(err)
            res.send("This ID has Already Exist");
        else {
            console.log('Employee Details submit successfully');
            res.redirect('/contact')
        }

    });

});
//about page

newApp.use('/', newRouter);



