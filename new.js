var express = require('express');
var bodyParser = require('body-parser');
var newApp = express();
var user = require('./router/user')
var index = require('./router/index')
var register = require('./router/register');
var passport = require('./config/security');

var morgan = require('morgan')
newApp.use(morgan('common'))
var logger = morgan('combined')
newApp.listen(4000);
newApp.use(express.session({ secret: 'keyboard cat' }));
newApp.use(passport.initialize());
newApp.use(passport.session());
newApp.use(bodyParser.json());
newApp.use(bodyParser.urlencoded({
    extended: true
}));

newApp.set('view engine', 'ejs');
newApp.use(express.static('public'));


newApp.use('/',index);
newApp.use('/user',user);
newApp.use('/register', register);





newApp.use('/about', function (req, res) {
    res.render("pages/about");
});

newApp.use('/contact', function (req, res) {
  //  logger(req, res, function (err) {
    //    if (err) return done(err)

        // respond to request
        // res.setHeader('content-type', 'text/plain')
    res.render("pages/contact");
    });

newApp.post('/login',
    passport.authenticate('local', { successRedirect: '/contact',
        failureRedirect: '/login',
        failureFlash: true })
);

