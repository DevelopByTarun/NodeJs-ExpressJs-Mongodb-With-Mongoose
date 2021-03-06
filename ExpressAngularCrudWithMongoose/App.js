var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('Public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());
var dbOperations = require("./dboperations.js");
app.post('/login', function(request, response) {
    var userObject = {
        userid: request.body.userid,
        password: request.body.password
    };

    dbOperations.getUser(userObject, response);
});
app.post('/register', function(request, response) {
    console.log("Inside Register ", request.body);
    var userObject = {
        userid: request.body.userid,
        password: request.body.password
    };
    console.log("Get the Register ", userObject);
    dbOperations.addNewUser(userObject, response);
});
app.post('/update', function(request, response) {

});
app.get('/delete', function(request, response) {

});
app.listen("8080", function() {
    console.log("Server Start...");
})