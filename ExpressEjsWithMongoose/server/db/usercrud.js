var User = require("./userschema");
var userOperations={
	addNewUser:function(userObject,response){
		var userData = {userid:String,password:String,username:String,roles:[{name:String,rights:[{name:String,descr:String}]}]};
		User.create(userObject,function(error){
			if(!error)
			response.send("U Register SuccessFully !");
			else
			response.send("Error in  Register  !");	
		});
	},
	isUserExist:function(uid, pwd, response){
		User.find({"userid":uid,"password":pwd},function(error,docs){
			if(docs && docs.length>0){
				response.send("Welcome "+docs[0].userid);
			}
			else{
				response.send("Invalid Userid or Password");
			}
		})
	}
}
module.exports = userOperations;