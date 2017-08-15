var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shoppingdeals', { title: 'Aligarh City' });
});

module.exports = router;
