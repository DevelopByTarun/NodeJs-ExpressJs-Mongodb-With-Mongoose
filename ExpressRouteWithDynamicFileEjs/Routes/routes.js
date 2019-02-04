const express = require('express');
const route = express.Router();
const path = require("path");
route.post("/login", (request, response) => {
    var userid = request.body.uid;
    var password = request.body.pwd;
    if (userid == password) {
        const menuOptions = [{"name":"Add New User","link":"http://www.google.com"},{"name":"Delete User","link":"http://www.flipkart.com"},{"name":"Profile User","link":"http://www.amazon.com"}]
        
		var userDetails = {
			data:["Sales Report","Purchase Report","Employee Report","Assets Report"]
		}
//        var imgArray = [{"image":"../../ShoppingApp/public/images/game.jpg"}, {"image":"../../ShoppingApp/public/images/ipad2.png"}, {"image":"../../ShoppingApp/public/images/shoes.jpg"}, {"image":"../../ShoppingApp/public/images/laptop.jpg"}]
        
		response.render('welcome',{"title":"Dashboard Template", "user":userid,"userdetails":userDetails,"menu":menuOptions, brand:"ExpressJs"});
    } else {
        var normalPath = path.normalize(__dirname+"/..");
		var fullPath = path.join(normalPath,"/public/error.html");
		response.sendFile(fullPath);
    }
    console.log("Query is ",request.body);
});
module.exports = route;
