const express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.get("/login", (req, res)=> {
//    var userid = req.query.uid;
//    var password = req.query.pwd;
//    if(userid == password) {
//        res.sendFile(__dirname+"/Public/Result.html");
//    }
//    else {
//        res.sendFile(__dirname+"/Public/Error.html");;
//    }
//});

app.post("/login", (req, res)=> {
    var userid = req.body.uid;
    var password = req.body.pwd;
    if(userid == password) {
        res.sendFile(__dirname+"/Public/Result.html");
    }
    else {
        res.sendFile(__dirname+"/Public/Error.html");;
    }
    console.log("Query Is :: ",req.body);
});

app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/Pages/Pages.html");
});

app.get("/", (req, res)=> {
    res.send("Welcome To App.js File");
});

app.listen(8080, ()=> {
    console.log("Start Server");
});