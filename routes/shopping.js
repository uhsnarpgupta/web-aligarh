var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("2");
    res.render('shop', { title: 'Aligarh City' });
});

//READ THE DATA FROM DATABASE
router.get('/get-data', function(req,res,next){
    console.log("Entering Read Function");
    mongoClient.connect(url,function (err,db) {
        assert.equal(null,err);
        var cursor = db.collection('shopping').find();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            resultArray.push(doc);
            console.log("Data output "+doc);
            console.log(resultArray[0].shop_name);
        },function () {
            db.close();
            res.render('admin',{item:resultArray,title: 'Aligarh City'});
        });
    });
});


module.exports = router;
