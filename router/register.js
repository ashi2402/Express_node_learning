

var router = require('express').Router();
var user = require('../models/user');

router.get('/', function (req, res) {
    res.render('pages/register');
});

router.post('/', function (req, res) {
    var user1 = new user ({
        username: req.body.username,
        password: req.body.password,
        mailid: req.body.email
    });
    console.log(user1);
    user1.save(function (err) {
       if (err)
           res.send("Some error occurred");
       else {
           console.log("User Data Save Successfully");
           res.send({success: true});
       }
   })

});

module.exports = router;
