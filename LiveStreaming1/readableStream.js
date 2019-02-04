var chalk = require("chalk");
var fs = require("fs");
var data = "";

var readableStream = fs.createReadStream("demo.txt");
readableStream.setEncoding("UTF-8");
readableStream.on("data", function(chunk) {
    data = data + chunk;
});
readableStream.on("end", function() {
    console.log(chalk.bgMagenta.white.bold(data));
});
readableStream.on("error", function(err) {
    console.log(chalk.bgYellow.red.bold(err.stack));
});
console.log(chalk.bgBlue("file ended...."));