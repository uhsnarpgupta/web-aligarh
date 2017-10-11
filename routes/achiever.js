var express = require('express');
var router = express.Router();

/* GET Education page. */
router.get('/', function(req, res, next) {
    res.render('achiever', { title: 'Aligarh City' });
});

module.exports = router;
