const mongoose = require("./connection");
var Schema = mongoose.Schema;

var userSchema = new Schema({userid:String,password:String,username:String,roles:[{name:String,rights:[{name:String,descr:String}]}]});

var User = mongoose.model("users",userSchema);

module.exports = User;