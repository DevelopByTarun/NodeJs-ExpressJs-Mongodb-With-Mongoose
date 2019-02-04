// Step -3 Represent Schema
var mongoose = require("./connection");
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({name:  String,
  phone: [],
  
  address: [{ state: String, pincode: Number }],
  });

var User = mongoose.model("userinfos",userSchema); 

module.exports=User;