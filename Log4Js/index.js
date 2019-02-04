const express = require("express");
const app = express();

app.get('/addnewuser',function(req,res){
const crud = require("./db/crud");
//var userObject = {userid:"ram",password:"124",
				 // username:"ram",roles:[{name:"admin",rights:[{name:"Add New User",descr:"this is add"}]}]};
//crud.addNewUser(userObject,res);
crud.isUserExist("ram","124",res);
	
});

app.listen(9999,()=>{
	console.log("Server Start...");
})