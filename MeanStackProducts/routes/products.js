var express = require("express");
var router = express.Router();
var productOperations = require("../database/dbOperations.js"); 

router.get("/getproducts", function(request, response) {
    productOperations.findProduct(response);
});

module.exports = router;