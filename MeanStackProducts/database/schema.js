var connection = require("./connection.js");
var Schema = connection.Schema;
var productSchema = new Schema({id:Number, category:String, brand:String, price:Number, image:String});
var Product = connection.model("products", productSchema);
module.exports = Product;
