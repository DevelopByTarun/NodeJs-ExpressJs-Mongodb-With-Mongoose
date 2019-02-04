const express = require("express");
var bodyParser = require('body-parser');

const app = express();

app.use(express.static("public")); // serving client side files
// this  is used to add the middleware in app
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');  // Using EJS as a Templating Engine
app.set('views',__dirname+'/pages');
// parse application/json
app.use(bodyParser.json());

var routes = require("./server/routes/userroutes");
app.use('/', routes)
app.listen(1234,function(){
	console.log("Server Start....");
})

