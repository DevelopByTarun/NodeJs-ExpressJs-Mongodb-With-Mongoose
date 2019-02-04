const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var userroutes = require("./userroutes");
app.use('/admin', userroutes);
/*app.get("/welcome",(req,res)=>{
res.send("Hello User");
});
app.post('/login',(req,res)=>{
	console.log(req);
	res.send("Welcome User "+req.body.userid);
});
app.post("/register",(req,res)=>{
	res.send("Register Code");
});*/
app.listen("1234",()=>{
console.log("Server Start...");
})