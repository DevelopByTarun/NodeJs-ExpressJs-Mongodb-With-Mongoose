var LoginSchema = require("../schema.js");

var dbOperations = {
    loginUser: function(loginObject, response) {
        LoginSchema.find({
            username: loginObject.username,
            password: loginObject.password
        }, function(err, user) {
            if(err) {
                response.send("Some Db Problem");
            }
            else {
                if(user[0]) {
                    response.send("Welcome "+user[0].username);
                }
                else {
                    response.send("Ivalid Username Or Password");
                }
            }
        }
    )}
}
module.exports = dbOperations;