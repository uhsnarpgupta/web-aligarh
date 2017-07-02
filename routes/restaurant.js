var express = require('express');
var router = express.Router();

// var mongo = require('mongodb');


var url = 'mongodb://localhost:27017/aligarhcity';

/* GET restaurant page. */
router.get('/', function(req, res, next) {
    res.render('restaurant', { title: 'Aligarh City' });
});

/*router.get('/restaurant', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url,function(err,db){
        if (err){
            console.log('Error while connecting to database '+ err);
        }
        else{
            var cursor = db.collection('shopping').find();
            cursor.forEach(function(doc,err){
                if(err){
                    console.log('Error found in the for loop '+ err);
                }else{
                    resultArray.push(doc);
                }
            },function(){
                db.close();
                res.render('restaurant',{title: 'Aligarh City',items: resultArray})
            });
        }
    });
})*/

module.exports = router;
