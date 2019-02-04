const express = require("express");
var app = express();

app.get("/", (req, res)=> {
    res.send("Welcome To Express Server Creation");
})
app.listen(8080,()=> {
    console.log("Server Start");
});