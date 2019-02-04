const express = require("express");
var app = express();
app.get("/welcome", (req, res) => {
    res.send({
        id: 101,
        name: "tarun"
    });
});
app.post("/hello", (req, res) => {
    res.send({
        id: 101,
        name: "tarun",
        role: "developer"
    });
});
app.listen(8080, () => {
    console.log("server start....");
});
module.exports = app;