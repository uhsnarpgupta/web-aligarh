var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/aligarhcity';
var resultArray = [];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { item:resultArray,title: 'Aligarh City'});
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

//iNSERT THE DATA IN THE DATABASE
router.post('/insert', function(req,res,next){
    console.log("Entering Insert Function");
    var shop;
    shop = {
        shop_name: req.body.shop_name,
        shop_address: req.body.shop_address,
        shop_city: req.body.shop_city,
        shop_zip: req.body.shop_zip,
        shop_email: req.body.shop_email,
        shop_phone: req.body.shop_phone,
        shop_rating_5: '10',
        shop_rating_4: '10',
        shop_rating_3: '10',
        shop_rating_2: '10',
        shop_rating_1: '10'
    };
 console.log(shop);
 mongoClient.connect(url,function (err,db) {
     assert.equal(null,err);
     db.collection('shopping').insertOne(shop,function (err, result) {
        assert.equal(null,err);
        console.log('Item Inserted Successfully');
        db.close();
     });
 });
 res.redirect('/insert');
});

module.exports = router;
