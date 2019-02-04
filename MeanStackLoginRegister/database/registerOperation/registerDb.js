var RegisterSchema = require("../schema.js");

var dbOperations = {
    registerUser: function(registerObject, response) {
        var registerObject = new RegisterSchema({
            username: registerObject.username,
            password: registerObject.password
        });
        registerObject.save(function(err) {
            if(!err) {
                response.send("Registration Is Completed Successfully");
            }
            else {
                response.send("Unable To Complete Registration");
            }
        })
    }
}
module.exports = dbOperations;