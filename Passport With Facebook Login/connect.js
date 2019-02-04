
var dbConfig = require("./config");
var mongoose = require("mongoose");
mongoose.connect(dbConfig.dbURL);
mongoose.Promise = require('q').Promise;
module.exports=mongoose;
