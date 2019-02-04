var userid = "tarun3";
var password = "2223";
var User = require("./User");
var userObject = new User(userid, password);
//console.log(userObject);
var helper = require("../Helper/Helper");
var result = helper.process(userObject);
console.log(result);