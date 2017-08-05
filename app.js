var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var mongo = require('mongodb');

var index = require('./routes/index');
var restaurant = require('./routes/restaurant');
var shopping = require('./routes/shopping');
var hotel = require('./routes/hotel');
var aboutus = require('./routes/about');
var event = require('./routes/event');
var admin = require('./routes/admin');
var swadeshi = require('./routes/shopping/swadeshi');
var sheeshMahal = require('./routes/shopping/sheeshmahal');
var raymonds = require('./routes/shopping/raymonds');
var adidas = require('./routes/shopping/adidas');
var attraction = require('./routes/attraction');
var kss = require('./routes/restaurant/kss');
var honour = require('./routes/honour');
var pod=require('./routes/pod');
var neet = require('./routes/education/neetsampletest');
var engtest = require('./routes/education/engtestpaper');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Home Page Routes
app.use('/', index);
app.use('/restaurant',restaurant);
app.use('/shop',shopping);
app.use('/hotel',hotel);
app.use('/about',aboutus);
app.use('/event',event);
app.use('/admin',admin);

//Education Route
app.use('/neet', neet);
app.use('/engtestpaper', engtest);
app.use('/getresult', engtest);

//Shopping Routes
app.use('/swadeshi',swadeshi);
app.use('/sheeshmahal',sheeshMahal);
app.use('/raymonds',raymonds);
app.use('/adidas',adidas);


//restaurant routes
app.use('/kss',kss);


//attraction route
app.use('/attraction', attraction);

//pod routes
app.use('/pod',pod);


//honour routes
app.use('/honour',honour);


//Admin Routes
app.use('/insert',admin);
app.use('/get-data',admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  console.log(req.url + " This is URL");
  console.log(app.get('views') + " This is the View");
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
