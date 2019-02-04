var validateObject = {
    validateUser:(userObject)=> {
        var validationObject = require("../Common/Common");
        if(validationObject.isBlank(userObject.userid)) {
            return "userid is blank";
        }
        if(validationObject.isBlank(userObject.password)) {
            return "password is blank";
        }
        return "";
    },
    process:(userObject)=> {
        if(validateObject.validateUser(userObject).length == 0) {
            var isUserExist = require("../FakeDatabase/database");
            if(isUserExist(userObject)) {
                return "welcome "+userObject.userid;
            }
            else {
                return "invalid password";
            }
        }
        else {
            "user validation failed";
        }
    }
}
module.exports = validateObject;