var connection = require("./connection.js");
var Schema = connection.Schema;
var registerSchema = new Schema({ username: String, password: String });
var Register = connection.model("register", registerSchema);
module.exports = Register;
// registerCollection is a collection name