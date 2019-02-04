const express = require("express");
var bodyParser = require('body-parser');

const app = express();
var session = require("express-session");

var cookieParser = require('cookie-parser');



app.use(express.static("public")); // serving client side files
// this  is used to add the middleware in app
app.use(bodyParser.urlencoded({ extended: false }));


// Using Session
app.use(session({
  secret: 'keyboard cat',
  	cookie: { secure: true,maxAge: 60000,expires:false }  // 6 min session
}));
app.use(cookieParser())

app.set('view engine', 'ejs');  // Using EJS as a Templating Engine
app.set('views',__dirname+'/pages');
// parse application/json
app.use(bodyParser.json());

var routes = require("./server/routes/userroutes");
app.use('/', routes)
app.listen(1234,function(){
	console.log("Server Start....");
})

