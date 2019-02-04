var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/integration");
module.exports = mongoose;