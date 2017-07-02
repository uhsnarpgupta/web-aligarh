var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('sheeshmahal', { title: 'Aligarh City' });
});


module.exports = router;
