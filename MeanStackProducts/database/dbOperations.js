const ProductSchema = require("./schema.js");

var operations = {
    findProduct: function(response) {
        ProductSchema.find({}, function(err, data) {
            if(!err) {
                response.send(data);
                console.log(data);
            }
            else {
                response.send("Data Not Found");
            }
        })
    }
}

module.exports = operations;
