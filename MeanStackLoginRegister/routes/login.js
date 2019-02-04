var express = require("express");
var router = express.Router();
var loginOperations = require("../database/loginOperation/loginDb.js"); 

router.post("/login", function(request, response) {
    // console.log("Inside Login :: ", request.body);
    var loginObject = {
        username: request.body.username,
        password: request.body.password
    };
    // console.log("Get The Login :: ", loginObject);
    loginOperations.loginUser(loginObject, response);
});

module.exports = router;