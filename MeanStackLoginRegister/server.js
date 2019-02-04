const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
  
    cookie: {
        secure: false,
        maxAge: 60000 * 6
    } // 6 min session
  }));
app.use(cookieParser());

// declare routes
const register = require("./routes/register.js");
const login = require("./routes/login.js");
// const products = require("./routes/product");

// use routes
app.use("/", register);
app.use("/", login);
// app.use("/product", products);

// start server
app.listen("9090", () => {
    console.log("Server Start....");
})

module.exports = app;
