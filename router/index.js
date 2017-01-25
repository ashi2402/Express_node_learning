var router = require('express').Router();

router.get('/', function (req, res) {

    var tagline = 'Any code of your own that you haven';

    res.render('pages/index');
});


module.exports = router;