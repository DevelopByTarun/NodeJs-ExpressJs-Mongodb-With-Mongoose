var User = require("./userschema");
var userOperations={
	addNewUser:function(userObject,response){
		// Adding Bcrypt 
		var bcrypt = require('bcryptjs');
		var userData = {userid:String,password:String,username:String,roles:[{name:String,rights:[{name:String,descr:String}]}]};
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(userObject.password, salt);
		userObject.password = hash;
		User.create(userObject,function(error){
			if(!error)
			response.send("U Register SuccessFully !");
			else
			response.send("Error in  Register  !");	
		});
	},
	isUserExist:function(uid, pwd, response,request){
		var bcrypt = require('bcryptjs');
		
		User.find({"userid":uid},function(error,docs){
			if(docs && docs.length>0){
				console.log("PWD ",pwd);
				console.log("PASSWORD ",docs[0].password);
				if(bcrypt.compareSync(pwd, docs[0].password)) {
					request.session.uid=uid;
					const products = require("./products");
				response.render("welcomeuser",{"products":products,"user":uid});
					//response.send("Welcome "+request.session.uid);
				}
				else{
					response.send("Invalid Userid or Password");
				}
			}
			else{
				response.send("Invalid Userid or Password");
			}
		})
	}
}
module.exports = userOperations;