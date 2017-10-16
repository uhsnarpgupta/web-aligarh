var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contactus', { title: 'Aligarh City' });
});


/* GET home page. */
router.get('/formcontactus', function(req, res, next) {
    console.log("Entering contactus Insert Function");
    var jsonfile='public/data/contactus.json';
    var obj = fs.readFileSync(jsonfile);

    var readdata=JSON.parse(obj);

    /*for (var i=0;i<readdata.length;i++){
        console.log(readdata[i]);
    }*/

    //creating an array
    /*var arr = [];*/

    //get date
    var date = new Date();
    var current_date = date.getDate();
    console.log(date);
    var newinquiry = date;
    var anewinquiry = {
        inquiry_fname: req.query.fname,
        inquiry_lname: req.query.lname,
        inquiry_email: req.query.email,
        inquiry_mobile:req.query.mobile,
        inquiry_country:req.query.country,
        inquiry_message:req.query.subject

    };
    readdata.Inquiry[newinquiry]=anewinquiry;
    //arr.push(inquiry);
    var data = JSON.stringify(readdata,null,2);
    console.log('data------- ' +data);
    var abc = jsonfile.length;
    console.log(jsonfile[abc-2]);

        fs.writeFile(jsonfile,data,'utf-8',function (err) {
            if (err) throw err
            console.log('Done!')
        });

    res.redirect('/contactus');
    //res.render('contactus', { title: 'Aligarh City' });
});


module.exports = router;