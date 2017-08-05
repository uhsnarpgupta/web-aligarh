var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('neettestpaper', {
        title: 'Aligarh City',
        score: 0,
        percentage: 0,
        question1value: 'z',
        question2value: 'z'
    });

});


//fetch the data from form
router.post('/getneetresult', function (req, res, next) {
    console.log("Entering test Result Function");
    var score = 0;
    var percentage = 0;
    var q1 = req.body.question1;
    var q2 = req.body.question2;
    if (req.body.question1 == 'a') {
        score = score + 1;
    }
    ;
    if (req.body.question2 == 'c') {
        score = score + 1;
    }
    ;
    percentage = (score / 2) * 100;
    console.log('final Score ' + score);
    console.log('final Percentage ' + percentage);
    res.render('neettestpaper', {
        title: 'Aligarh City',
        score: score,
        percentage: percentage,
        question1value: q1,
        question2value: q2
    });
});

module.exports = router;
