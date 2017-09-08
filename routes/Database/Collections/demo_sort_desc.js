//Use the value -1 in the sort object to sort descending.

//{ name: 1 } // ascending
//{ name: -1 } // descending

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mysort = { name: -1 };
    db.collection("customers").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});