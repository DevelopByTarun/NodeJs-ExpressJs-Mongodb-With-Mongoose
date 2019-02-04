var express  = require("express");
var getPath = require("../utility/utils");
var router = express.Router();
router.post("/register",function(request,response){
	var uid = request.body.userid;
	var pwd = request.body.pwd;
	var uname = request.body.uname;
	var role = request.body.role;
	var UserType  = require("../helpers/user");
	var userObject = new UserType(uid,pwd,uname,role);
	var userOperations = require("../db/usercrud");
	userOperations.addNewUser(userObject,response);
	//response.send("Welcome to the Register Page "+uid+" "+pwd+" "+uname+" "+role);
});
router.get("/login",function(request,response){
	response.sendFile(getPath("/public/login.html"));
});
router.post("/login",function(request,response){
	//console.log(request);
	//var uid = request.query.userid;  // Get 
	//var pwd = request.query.pwd;
	var uid = request.body.userid;
	var pwd = request.body.pwd;
	var userOperations = require("../db/usercrud");
	userOperations.isUserExist(uid,pwd,response);
//	if(uid==pwd){
//		
//	response.sendFile(getPath("/public/welcome.html"));
//		const products = require("../db/products");
//		response.render("welcomeuser",{"products":products,"user":uid});
//		//response.send("welcome "+uid);
//	}
//	else{
//		response.send("Invalid Userid or Password");
//	}
})
module.exports = router;