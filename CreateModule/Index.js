const createModuleObj = require("./CreateModule");
var calcObj = new createModuleObj(20.20, 40.40);

function show() {
    console.log("Sum Of X And Y Is :: " + calcObj.add());
    console.log("Suntract Of X And Y Is :: " + calcObj.sub());
    console.log("Multiply Of X And Y Is :: " + calcObj.mul());
    console.log("Divide Of X And Y Is :: " + calcObj.div());
}
show();
module.exports = show;