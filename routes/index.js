var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var today = new Date().toDateString();
    /*var today = new Date().toLocaleDateString('en-AU', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    }).split(' ').join('-');*/
  /*var n =  new Date();
       console.log('date'+n)
       var y = n.getFullYear();
       var m = n.getMonth() + 1;
       console.log('month ' +m);
       var d = n.getDate();
       var date = d + "/" + m + "/" + y;*/

  res.render('index', { title: 'Aligarh City',datetime:today });
});

module.exports = router;
