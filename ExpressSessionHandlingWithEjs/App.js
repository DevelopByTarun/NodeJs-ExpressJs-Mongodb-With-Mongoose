const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('Public'));
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(session({
    secret: 'cat keyboard dog',
    cookie: {
        secure: false,
        maxAge: 60000
    } // 1 min session
}));
app.use(cookieParser())
app.set('view engine', 'ejs');
app.set("views", "./views");
//app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}))
const routes = require('./Routes/routes');
app.use('/admin', routes);
app.use(bodyParser.json())
app.listen(8080, () => {
    console.log('Server Start');
});