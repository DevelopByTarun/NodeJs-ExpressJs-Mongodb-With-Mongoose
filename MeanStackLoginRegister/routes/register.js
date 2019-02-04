var express = require("express");
var router = express.Router();
var registerOperations = require("../database/registerOperation/registerDb.js");

router.post("/register", function(request, response) {
    // console.log("Inside Register :: ", request.body);
    var registerObject = {
        username: request.body.username,
        password: request.body.password
    };
    // console.log("Get The Register ", registerObject);
    registerOperations.registerUser(registerObject, response);
});

module.exports = router;