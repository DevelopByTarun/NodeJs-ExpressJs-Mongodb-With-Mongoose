var express = require("express");

var app = express();
app.use(express.static('public'));

var bodyParser =require("body-parser");
var mfavicon=require("express-favicon");
var srs = require('secure-random-string');
var randomstring = require("randomstring");
// npm install body-parser --save
//app.use(express.static("public"));
//var session = require('client-sessions');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


srs(function(err, sr) {
        return sr;
     },function(err){
        return randomstring.generate(35);
         
});



app.use(mfavicon(__dirname + '/public/favicon.icon'));

//app.use(bodyParser());  // Express JS 3.x Support this
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret:srs(),
    saveUninitialized:true,
    resave:true,
    store: new MongoStore({
        url: 'mongodb://localhost:27017/sessions',
        //ttl: 14 * 24 * 60 * 60,//14 days 
        ttl:120,//14 days 
        //mongoOptions: advancedOptions // See below for details 
    })
}));
/*
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

*/
var i=11;

app.post('/register',function(request,response){
    var dbOperations = require("./crudoperation");
    var data =request.body;
    console.log("DATA is      ",data);
    dbOperations.addUser(data,response);
    var user;
    var thirtyDays = 2*60*1000;
    
    request.session.cookie.expires = new Date(Date.now() + thirtyDays);
//    req.session.cookie.maxAge = thirtyDays;
//    var xyzz=30;
    request.session.user = i;
    i++;
    /*if (request.session && request.session.user)
          {
              console.log(request.session.user);
          }
         */ 
});

app.post('/login',function(request,response){
    if (request.session && request.session.user)
          {
              console.log(request.session.user);
          }
    request.session.destroy(function(err) {
  // cannot access session here 
    })
         
 });


app.listen(1234,function(){
   console.log("Server Start...");
});