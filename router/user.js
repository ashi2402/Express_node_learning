var router = require('express').Router();
var User = require('../models/user')

// Define routes handling profile requests

router.get('/', function (req, res) {
    res.send("Fetching all users");
});

router.post('/', function (req, res) {

    var employee = new User({
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

router.put('/', function (req, res) {
    var personId = req.body.empnumber;
    Employee.findOne({empnumber: personId}, function (err, updateUser) {
        updateUser.name = req.body.name;
        updateUser.contact  = req.body.contact;
        updateUser.department = req.body.department;

        updateUser.save(function (err, data) {
            if(err) throw err;
            res.redirect('/dataReceive')
        })

    });

});

router.get('/dataReceive', function (req, res) {
    Employee.find({}, function(err, users) {
        if (err) throw err;

        res.render('pages/DataResult', {XYZ:users});
    });
});

router.get('/personDetails/:empID', function (req, res) {
    var personId = req.params.empID;
    Employee.find({empnumber:personId}, function (err, users) {
        if(err) throw err;

        res.render('pages/personDetails', {user :users})
    })
});

router.get('/EditForm/:empID', function (req, res) {
    var personaldetail = req.params.empID;
    Employee.find({empnumber: personaldetail}, function (err, details) {
        if(err) throw err;

        res.render('pages/EditForm', {detail: details})
    })
});
router.delete('/delete/:empNumber',function (req, res) {
    var empNumber = req.params.empNumber;
    Employee.remove({empnumber: empNumber}, function (err) {
        if(err){
            res.send({success:false, text: err.message})

        }
        else {
            res.send({success:true, text: "Object deleted"})
        }

    });
    console.log(empNumber);

});
module.exports = router;