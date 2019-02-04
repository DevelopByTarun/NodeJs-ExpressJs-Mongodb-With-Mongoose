// Step -3 Represent Schema
var mongoose = require("./connection");
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({userid:  String,
  password: String,phone:String,address: String,
  });

var User = mongoose.model("userdatas",userSchema); 

module.exports=User;