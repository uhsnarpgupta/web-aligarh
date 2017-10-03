var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var mongo = require('mongodb');

var index = require('./routes/index');
var restaurant = require('./routes/restaurant');
var shopping = require('./routes/shopnew');
var hotel = require('./routes/hotel');
var aboutus = require('./routes/about');
var event = require('./routes/event');
var admin = require('./routes/admin');
var swadeshi = require('./routes/shopping/swadeshi')
var kalaSaree = require('./routes/shopping/kalasaree');
var dineshjewlers = require('./routes/shopping/dineshjewlers');
var sheeshMahal = require('./routes/shopping/sheeshmahal');
var raymonds = require('./routes/shopping/raymonds');
var adidas = require('./routes/shopping/adidas');
var attraction = require('./routes/attraction');
var kss = require('./routes/restaurant/kss');
var honour = require('./routes/honour');
var pod=require('./routes/pod');
var neet = require('./routes/education/neetsampletest');
var engtest = require('./routes/education/engtestpaper');
var justforfun = require('./routes/entertainment/justforfun');
var doyouknow = require('./routes/doyouknow');
var podUpdated=require('./routes/podUpdated');

var todayinhistory=require('./routes/todayinhistory');
var restaurantdeals = require('./routes/restaurantdeals');
var shoppingdeals = require('./routes/shoppingdeals');
var hoteldeals = require('./routes/hoteldeals');
var study = require('./routes/study');
var recipe = require('./routes/recipe');
var recipe2 = require('./routes/recipe2');
var restaurantnew = require('./routes/restaurantnew');
/*var menu = require('./routes/menu');*/
var comingsoon = require('./routes/comingsoon');

var contactus = require('./routes/contactus');
var formcontactus = require('./routes/form-contactus');

var privacypolicy = require('./routes/privacypolicy');
var aboutaligarh = require('./routes/aboutaligarh');

var lock = require('./routes/locks');

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
app.use('/shopnew',shopping);
app.use('/hotel',hotel);
app.use('/about',aboutus);
app.use('/event',event);
app.use('/admin',admin);
app.use('/contactus',contactus);
app.use('/formcontactus',formcontactus);
app.use('/privacypolicy',privacypolicy);
app.use('/aboutaligarh',aboutaligarh);

//Education Route
app.use('/neet', neet);
app.use('/getneetresult',neet);
app.use('/engtestpaper', engtest);
app.use('/getresult', engtest);

//Shopping Routes
app.use('/swadeshi',swadeshi);
app.use('/kalasaree',kalaSaree);
app.use('/sheeshmahal',sheeshMahal);
app.use('/raymonds',raymonds);
app.use('/adidas',adidas);
app.use('/dineshjewlers',dineshjewlers);

//today in history
app.use('/todayinhistory',todayinhistory);

//do you know
app.use('/didyouknow',doyouknow);

//entertainment routes
app.use('/justforfun',justforfun);

//restaurant routes
app.use('/kss',kss);
app.use('/restaurantnew',restaurantnew);

//attraction route
app.use('/attraction', attraction);

//pod routes
app.use('/pod',pod);

//pod Updated routes
app.use('/podUpdated',podUpdated);


//honour routes
app.use('/honour',honour);

//Restaurant routes
app.use('/restaurantdeals',restaurantdeals);
app.use('/shoppingdeals',shoppingdeals);
app.use('/hoteldeals',hoteldeals);

//Education routes
app.use('/study',study);

//Recipe routes
app.use('/recipe',recipe);
app.use('/recipe2',recipe2);

//app.use('/menu', menu);
app.use('/comingsoon',comingsoon);

//Admin Routes
app.use('/insert',admin);
app.use('/get-data',admin);

//Hardware and Lock route
app.use('/locks',lock);

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

// Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('Press Ctrl+C to quit.');
// });

module.exports = app;
