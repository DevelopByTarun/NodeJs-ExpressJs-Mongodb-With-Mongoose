
var dbConfig = require("./config");
var mongoose = require("mongoose");
mongoose.connect(dbConfig.dbURL);
module.exports=mongoose;
