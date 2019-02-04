


var connection = require("./connect");
var Schema = connection.Schema;
var userSchema = new Schema({userid:String,password:String,username:String,roles:[{name:String,rights:[{name:String,descr:String}]}]});
var User = connection.model("users",userSchema);
module.exports=User;