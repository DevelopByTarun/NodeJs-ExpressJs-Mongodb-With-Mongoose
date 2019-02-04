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
const products = require("./routes/products.js");

// use routes
app.use("/", products);

// start server
app.listen("9000", () => {
    console.log("Server Start....");
})

module.exports = app;
