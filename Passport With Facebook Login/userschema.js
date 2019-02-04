


var connection = require("./connect");
var Schema = connection.Schema;
var userSchema = new Schema({userid:String,password:String});
var User = connection.model("emps",userSchema);
module.exports=User;