const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('Public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}))
const routes = require('./Routes/routes');
app.use('/admin', routes);
app.use(bodyParser.json())
app.listen(8080, () => {
    console.log('Server Start');
});
