var mongoose = require("mongoose");
var dbConfig = require("./dbConfig.js");
mongoose.connect(dbConfig.dburl);
console.log("Connection Created....");
module.exports = mongoose;