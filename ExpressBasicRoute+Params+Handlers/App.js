const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("<b>Hello User</b>");
});

app.get('/welcome', (request, response) => {
    response.send("{id:1001,name:'Ram',salary:99999}");
});

app.get('/userid', (request, response) => {
    response.send("<b>Hello Username</b>");
});

app.get('/password', (request, response) => {
    response.send("<b>Hello Password</b>");
});

// route params
app.get('/users/:userId/books/:bookId', (request, response) => {
    //response.send(request.params);
    response.send("your userid is " + request.params.userid + " and purchase of " + request.params.bookId + " book");
});

// route handler
app.get("/example/a", (request, response, next) => {
    console.log("response is send to the next function");
    next();
}, (request, response) => {
    response.send("<h1>Hello Route Handler</h1>");
});

var f1 = (request, response, next) => {
    console.log("this is f1");
    next();
}
var f2 = (request, response, next) => {
    console.log("this is f2");
    next();
}
var f3 = (request, response, next) => {
    response.send("hello form f3");
    next();
}
app.get("/example/b", [f1, f2, f3]);

app.listen(8080, () => {
    console.log("server start");
});