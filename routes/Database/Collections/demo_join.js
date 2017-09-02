// Join Collections
// MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.
//
//     The $lookup stage lets you specify which collection you want to join with the current collection, and which
// fields that should match.
//
//     Consider you have a "orders" collection and a "products" collection:

// Join the matching "products" document(s) to the "orders" collection:



    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection('orders').aggregate([
        { $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: 'id',
                as: 'orderdetails'
            }
        }
    ], function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});