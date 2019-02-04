const expoFile = require("./ExportData");

console.log(expoFile);

console.log(expoFile.calObj);

console.log("Sum Of X And Y Is :: " + expoFile.calObj.add());

console.log("Subtraction Of X And Y Is :: " + expoFile.calObj.subtract());

console.log("Multiplication Of X And Y Is :: " + expoFile.calObj.multiply());

console.log("Division Of X And Y Is :: " + expoFile.calObj.divide());

expoFile.show();

expoFile.obj.input();

expoFile.obj.output();