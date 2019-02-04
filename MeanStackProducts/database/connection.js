var mongoose = require("mongoose");
var config = require("./config.js");
mongoose.connect(config.dbUrl);
console.log("Connection Created....");
module.exports = mongoose;