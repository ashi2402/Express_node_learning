var router = require('express').Router();
var employee = require('../models/PersonalDetails');

router.post('/loginData', function (req, res) {
    new PersonalDetails({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        userid: req.body.userid,
        password: req.body.password
    }).save(function (err) {
        if (err)
            res.send("This ID has Already Exist");
        else {
            console.log("User Data Save Successfully");
            res.send({success: true});
        }
    })
});



router.get('/login', function (req, res) {
    res.render('pages/login');
});
